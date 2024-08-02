package test03;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;

import com.google.gson.Gson;

public class Test1 {
	public static void main(String[] args) throws IOException {
		//
		BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream("data/refrigerator.json")));
		String str = null;
		StringBuilder sb = new StringBuilder();
		while((str = br.readLine()) != null) {
			sb.append(str);
		}
		
		Gson gson = new Gson();
		Refrigerator[] arr = gson.fromJson(sb.toString(), Refrigerator[].class);
		arr[0].setCategory("김치냉장고");
		
		
		
		//데이터를 읽고 쓸 수 있다.
		
		
		
	}

}
