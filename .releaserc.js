module.exports = {
  branches: ["main"],
  plugins: [
    [
      'semantic-release-gitmoji', {
			  releaseRules: {
				major: [ ':boom:' ],
				minor: [ ':sparkles:' ],
				patch: [
					":zap:",
					":bug:",
					":ambulance:",
					":lipstick:",
					":lock:",
					":arrow_down:",
					":arrow_up:",
					":pushpin:",
					":chart_with_upwards_trend:",
					":heavy_plus_sign:",
					":heavy_minus_sign:",
					":wrench:",
					":globe_with_meridians:",
					":pencil2:",
					":rewind:",
					":package:",
					":alien:",
					":bento:",
					":wheelchair:",
					":speech-balloon:",
					":card-file-box:",
					":children-crossing:",
					":iphone:",
					":egg:",
					":alembic:",
					":mag:",
					":label:",
					":triangular-flag-on-post:",
					":goal-net:",
					":dizzy:",
					":wastebasket:",
					":passport-control:",
					":adhesive-bandage:",
					":necktie:"
				  ]
			  },
			  releaseNotes: {
				template,
				partials: { commitTemplate },
				helpers: {
				  datetime: function (format = 'UTC:yyyy-mm-dd') {
					return dateFormat(new Date(), format)
				  }
				},
				issueResolution: {
				  template: '{baseUrl}/{owner}/{repo}/issues/{ref}',
				  baseUrl: 'https://gitlab.com',
				  source: 'gitlab.com',
				  removeFromCommit: false,
				  regex: /#\d+/g
				}
			  }
			},
    "@semantic-release/github",
    "@semantic-release/npm"
  ]
  ]
}; 