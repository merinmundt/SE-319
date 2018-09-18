import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;


public class Server {
 
	private static ArrayList<PrintWriter> writers = new ArrayList<PrintWriter>();

	@SuppressWarnings("resource")
	public static void main(String[] args) throws IOException {

		ServerSocket serversocket = null; 
		int portNum = 4444;
		
		
		try {
			//starts up the server
			serversocket = new ServerSocket(portNum); 									
			System.out.println("Server Started");
		}
			
		catch (IOException e) {
			System.out.println("Could not listen on port: 4444");
			e.printStackTrace();
			System.exit(-1);
		}
		
		while(true){
			//Socket clientSocket = null;
			
			try{
				//starts the client socket and handler 
				System.out.println("Waiting for client");
				Socket clientSocket = serversocket.accept(); 
				ListClientHandler cs = new ListClientHandler(clientSocket);
				cs.start();
				
			}
			
			catch (IOException e) {
				System.out.println("Accept failed: 4444");
					System.exit(-1);
		
			}

		}
	}	
	



private static class ListClientHandler extends Thread {
	Socket s;
	

	ListClientHandler(Socket s) {
		this.s = s;

	}

	//reads in the name and tells them if they have been connected to the chatroom and server.
	//Uses a buffered reader to read in the input
	@Override
	public void run() { 
		PrintWriter out = null;
		String name = null;
		
		try {
			
			BufferedReader in = new BufferedReader(new InputStreamReader(s.getInputStream()));
			out = new PrintWriter(s.getOutputStream(), true);
			
			
			while(true){
				name = in.readLine();
				out.println("You are connected to chat! Welcome!");
				break;
			}


			
			writers.add(out);

			//Reads in what the client has texted, makes sure it is not nothing, then prints it off 
			//on the other clients pages and servers page
			while(true){
				String text = in.readLine();
				if(text == null){
					return;
				}
				
				for(PrintWriter w : writers){
					if(w != out){
						w.println(name + ": " + text);
						
					}
					
				}
				System.out.println(name + ": " + text);
			}
		}
		catch (IOException e) {
			e.printStackTrace();
		}
		finally {
			writers.remove(out);
			try{
				s.close();
			}
			catch (IOException e) {
				e.printStackTrace();
			}
		}
		
	} 
	}
	
}

