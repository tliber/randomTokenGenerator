module.exports.generateUniqueToken = function(user, tokenCache){
	var letters = 'ABCD';
	var randomLetter = function(){
		return letters[Math.floor((Math.random() * 4))]
	}
	var newToken = '';
	var checkAndTweakToken = function(tokenCache, token){
		if (tokenCache[token]){
			token = letters[Math.floor((Math.random() * 9))] = randomLetter();
			return checkAndTweakToken(tokenCache, token)

		} else {
			return token;
		}
	}
 	while (newToken.length !== 10){
		newToken = newToken + letters[randomLetter()]
 	}
	
	if (tokenCache[newToken]){
		return checkAndTweakToken(tokenCache, newToken)
	} else {
		return newToken	}
	}	
