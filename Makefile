ZIP_FILE=chrome-open-in-spotify-client.zip

.PHONY: clean
clean:
	@rm -f $(ZIP_FILE)
	@rm -rf dist/

package: $(ZIP_FILE)

$(ZIP_FILE): dist/chrome/chrome.js dist/chrome/spotify-link.js dist/chrome/manifest.json dist/chrome/chrome-background.html
	zip -j $(ZIP_FILE) $^

dist/chrome/%: %
	@mkdir -p dist/chrome
	cp $* $@

fmt:
	npx standard --fix

develop:
	git config --local blame.ignoreRevsFile .ignored_revisions  # requires Git >= 2.23
	echo "#!/bin/bash\nnpx standard" > .git/hooks/pre-commit && chmod a+x .git/hooks/pre-commit
