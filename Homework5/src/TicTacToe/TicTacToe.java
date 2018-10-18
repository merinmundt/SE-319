package TicTacToe;

import java.io.FileInputStream;

import javax.swing.JFrame;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Cell;
import javafx.scene.control.Label;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.Pane;

import javafx.scene.paint.ImagePattern;

import javafx.stage.Stage;

public class TicTacToe extends Application {

	private Cell[][] board = new Cell[3][3];
    private char currentPlayer = 'X';
    private Image xImage = new Image("file:///Users/merinmundt/Documents/Coms319/Homework5/x.jpg");
    private Image oImage = new Image("file:///Users/merinmundt/Documents/Coms319/Homework5/x.jpg");
    private Button[][] buttons = new Button[3][3];
    
    private Label statusMsg = new Label("X must play");
    private ImageView iv0, iv1 ,iv2, iv3, iv4, iv5, iv6, iv7, iv8;
    
    
    
	@Override
	public void start(Stage primaryStage) throws Exception {
		GridPane grid = new GridPane();
		grid.setPadding(new Insets(10,10,10,10));
		
	    
		for(int i = 0; i < 3; i++){
			for (int j = 0; j < 3; j++){
				board[i][j] = new Cell();
				grid.add(board[i][j] , j, i);

			
			}
		}
		
		BorderPane border = new BorderPane();
		border.setCenter(grid);
		border.setBottom(statusMsg);
		Button newGame = new Button("Click for New Game");
		border.setTop(newGame);
		
		Scene scene = new Scene(border, 450, 300);
		primaryStage.setScene(scene);
		primaryStage.setTitle("Tic Tac Toe");
		
		primaryStage.show();
	}
		
			
	
	public boolean isBoardFull(){
		for(int i = 0; i < 3; i++){
			for(int j = 0; j < 3; j++){
				if(board[i][j].getPlayer() == ' '){
					return false;
				}
			}
		}
		return true;
	}
	
	
	
	public boolean checkForWin(char player){
		for(int i = 0; i < 3; i++){
			if(board[i][0].getPlayer() == player && board[i][1].getPlayer() == player && board[i][2].getPlayer() == player){
				return true;
			}
			if(board[0][i].getPlayer() == player && board[1][i].getPlayer() == player && board[2][i].getPlayer() == player){
				return true;
			}
		}
		if(board[0][0].getPlayer() == player && board[1][1].getPlayer() == player && board[2][2].getPlayer() == player){
			return true;
		}
		if(board[2][0].getPlayer() == player && board[1][1].getPlayer() == player && board[0][2].getPlayer() == player){
			return true;
		}
		return false;
	}
	
	
	public class Cell extends Pane{
		private char player = ' ';
		
		public Cell(){
			setStyle("-fx-border-color : black");
			this.setPrefSize(300, 300);
			this.setOnMouseClicked(e-> handleClick());
		}
		
		private void handleClick() {
			
			if (player == ' ' && currentPlayer != ' '){
				player = currentPlayer;
			}
			if(checkForWin(player)){
				statusMsg.setText(player + " has won!");
				
			}
			else if(isBoardFull()){
				statusMsg.setText("Draw");
				currentPlayer = ' ';
			}
			else{
				currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
				statusMsg.setText(currentPlayer + " its your move");
			}
		
		}

		public char getPlayer(){
			return player;
		}
		
		public void setPlayer(char c){
			player = c;
			
			if(player == 'X'){
				
				ImageView xpic = new ImageView();
				ImageView  opic = new ImageView();
				opic.setFitHeight(75);
				opic.setFitWidth(75);
				opic.setImage(oImage);
				xpic.setFitWidth(75);
				xpic.setFitHeight(75);
				xpic.setImage(xImage);
				getChildren().add(xpic);	
				/*Line line = new Line(10,10, this.getHeight()-10, this.getWidth()-10);
				line.endXProperty().bind(this.widthProperty().subtract(10));
				line.endYProperty().bind(this.heightProperty().subtract(10));
				
				Line line2 = new Line(10,10, this.getWidth()-10, this.getHeight()-10);
				line2.endXProperty().bind(this.widthProperty().subtract(10));
				line2.startYProperty().bind(this.heightProperty().subtract(10));
				
				getChildren().addAll(line, line2);
				*/
			}
			else if(player == 'O'){
				/*
				Ellipse ellipse = new Ellipse(this.getWidth() / 2, this.getHeight() / 2, 
						this.getWidth() / 2 - 10, this.getHeight() / 2 - 10);
				ellipse.centerXProperty().bind(widthProperty().divide(2));
				ellipse.centerYProperty().bind(heightProperty().divide(2));
				ellipse.radiusXProperty().bind(widthProperty().divide(2).subtract(10));
				ellipse.radiusYProperty().bind(heightProperty().divide(2).subtract(10));
				ellipse.setStroke(Color.BLACK);
				ellipse.setFill(Color.BLUE);
				//ellipse.setFill(new ImagePattern(xImage));
				 
				 */
				
			}
		}
	}
	public static void main(String[] args){
		launch(args);
	}

}
