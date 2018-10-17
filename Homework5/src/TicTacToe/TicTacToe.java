package TicTacToe;

import java.io.FileInputStream;

import javax.swing.JFrame;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Cell;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.GridPane;
import javafx.stage.Stage;

public class TicTacToe extends Application {

	private Cell[][] board = new Cell[3][3];
    private char currentPlayer = 'X';
    
    
    
    
	@Override
	public void start(Stage primaryStage) throws Exception {
		GridPane grid = new GridPane();
	    
		//Image xImage = new Image(new FileInputStream("Users/merinmundt/Documents/Coms319/Homework5/x.jpg"));
		//ImageView xView = new ImageView(xImage);
		//Image oImage = new Image(new FileInputStream("Users/merinmundt/Documents/Coms319/Homework5/o.jpg"));
		//ImageView oView = new ImageView(oImage);
		
		for(int i = 0; i < 3; i++){
			for (int j = 0; j < 3; j++){
				board[i][j] = new Cell();
				grid.add(board[i][j], j, i);
			}
		}
		
		BorderPane border = new BorderPane();
		border.setCenter(grid);
		
		Scene scene = new Scene(border, 450, 300);
		primaryStage.setScene(scene);
		primaryStage.setTitle("Tic Tac Toe");
		primaryStage.show();
		
		
	}
	
	public boolean isBoardFull(){
		for(int i = 0; i < 3; i++){
			for(int j = 0; j < 3; j++){
				if(board[i][j].getPlayer() == " "){
					return false;
				}
			}
		}
		return true;
	}
	
	public boolean checkForWin(char player){
		for(int i = 0; i < 3; i++){
			if(board[i][0].getPlayer == player && board[i][1].getPlayer() == player && board[i][2].getPlayer() == player){
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
	}
	
	

}
