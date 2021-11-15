setup:
	@yarn

run:
	@yarn start

run-firebase:
	@yarn build && firebase emulators:start

deploy-firebase-hosting:
	@yarn build  && firebase deploy --only hosting