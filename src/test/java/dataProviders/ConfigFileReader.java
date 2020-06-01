package dataProviders;

import java.util.Properties;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;


public class ConfigFileReader {
	private Properties properties;
    private final String propertyFilePath= "src/test/resources/Config.properties";
	
	public ConfigFileReader(){
		BufferedReader reader;
		try {
			reader = new BufferedReader(new FileReader(propertyFilePath));
			properties = new Properties();
			try {
				properties.load(reader);
				reader.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
			throw new RuntimeException("Configuration.properties not found at " + propertyFilePath);
		}		
	}

	public String getUsername(){
        String value = properties.getProperty("username");
        if(value!= null) return value;
        else throw new RuntimeException(value+"not specified in the Configuration.properties file.");
    }

	public String getPassword(){
		String value = properties.getProperty("password");
		if(value!= null) return value;
		else throw new RuntimeException(value+"not specified in the Configuration.properties file.");
	}


}
