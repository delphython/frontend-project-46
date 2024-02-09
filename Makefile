install:
	npm ci
gendiff:
	node bin/gendiff.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
test:
	npx jest
test-coverage:
	./gradlew jacocoTestReport
test-cov:
	npm test -- --coverage --coverageProvider=v8