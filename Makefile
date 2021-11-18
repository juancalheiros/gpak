setup:
	@yarn; cd functions && make setup; cd scripts && make setup

run:
	@yarn start

run-firebase:
	@yarn build && firebase emulators:start

deploy-firebase-hosting:
	@yarn build  && firebase deploy --only hosting

make test-functions:
	@cd functions/scripts && make test