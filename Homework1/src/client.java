
import java.net.*;
import java.io.*;

public class Client {

	static Socket serverSocket;
	String Host = "localhost";
	int Port = 4444;

	//creates a new client, reader and writer for each chatroom
	public static void main(String[] args) throws Exception {
		Client lc = new Client();
		Reader r = new Reader(lc);
		Writer w = new Writer(lc);
		r.start();
		w.start();
	}
	
	
	public Client() throws UnknownHostException, IOException {
	
		serverSocket = new Socket(Host, Port);
	} 
		
		//Asks user for their name, then loops through looking to read in other
		//clients text messages that should appear on their boards. 
		private static class Reader extends Thread{
			Client read;
			
			public Reader(Client cl){
				read = cl;
			}
			public void run() {
				try{
					BufferedReader in = new BufferedReader(new InputStreamReader(serverSocket.getInputStream()));
					PrintWriter out = new PrintWriter(serverSocket.getOutputStream(), true);
					System.out.println(">Enter Your Name: ");
					
					while(true){
						String intext = in.readLine();
						System.out.println(intext);
						System.out.println("Text: ");
						
					}
				}
					
					catch (IOException e) {
						e.printStackTrace();
						}
				
				
			}
		}		
			//reads in the line written using a buffered reader
		 	//and loops through to print the necessary lines
			private static class Writer extends Thread{
				
				Client write;
				
				public Writer(Client cl){
					write = cl;
				}
				public void run(){
					
				try{
					PrintWriter out = new PrintWriter(serverSocket.getOutputStream(), true);
					BufferedReader message = new BufferedReader(new InputStreamReader(System.in));
				
					while(true){
						String chat = message.readLine();
						if(chat == null){
							return;
						}
						out.println(chat);
					}
				}
					catch (IOException e) {
						e.printStackTrace();
					}
			
			
			}
		}
			
		

		
			
		
		
	}
	



