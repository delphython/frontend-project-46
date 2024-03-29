install:
	npm ci
gendiff:
	node bin/gendiff.js
publish:
	npm publish --dry-run
link:
	npx link
lint:
	npx eslint src
test:
	npx jest
test-coverage:
	npm test -- --coverage --coverageProvider=v8
