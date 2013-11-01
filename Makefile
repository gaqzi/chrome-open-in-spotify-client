ZIP_FILE=chrome-open-in-spotify-client.zip

package: manifest.json open-in-client.js
	@rm -f $(ZIP_FILE)
	zip $(ZIP_FILE) manifest.json open-in-client.js
