package TicTacToe;

public class Game {
	//get player one move
	//check for win
	//get player 2 move
	//check for win
	//if win/draw print output, ask for new game
	private char[][] board = new char[3][3];
    private char player = 1;
	
    public static void main(String[] args){
    	new Game();
    	getMoves();
    }
	

    public Game() {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                board[i][j] = ' ';
            }
        }
        player = 'X';

        System.out.println("  1 2 3");
        System.out.println(" -------");
        System.out.println("A|" + board[0][0] + "|" + board[0][1] + "|"
                + board[0][2] + "|");
        System.out.println(" -------");
        System.out.println("B|" + board[1][0] + "|" + board[1][1] + "|"
                + board[1][2] + "|");
        System.out.println(" -------");
        System.out.println("C|" + board[2][0] + "|" + board[2][1] + "|"
                + board[2][2] + "|");
        System.out.println(" -------	");
    }
    
    public static void getMoves(){
    	int moveCount = 0;
    	while(moveCount != 9){
    		
    	}
    }
	
	
	
	
	
	
}
