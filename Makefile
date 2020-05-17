ZIP_FILE=chrome-open-in-spotify-client.zip

.PHONY: clean
clean:
	@rm -f $(ZIP_FILE)
	@rm -rf dist/

package: $(ZIP_FILE)

$(ZIP_FILE): dist/chrome/open-in-client.js dist/chrome/manifest.json
	zip -j $(ZIP_FILE) dist/chrome/manifest.json dist/chrome/open-in-client.js

dist/chrome/open-in-client.js: chrome.js spotify-link.js
	npx webpack --mode=production

dist/chrome/manifest.json: manifest.json
	cp $< $@

fmt:
	npx standard --fix

develop:
	git config --local blame.ignoreRevsFile .ignored_revisions  # requires Git >= 2.23
	echo "#!/bin/bash\nnpx standard" > .git/hooks/pre-commit && chmod a+x .git/hooks/pre-commit
