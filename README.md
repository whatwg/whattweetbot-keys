# whattweetbot-keys

`whattweetbot-keys` is a command-line utility to associate a Twitter account with a Twitter app (`whattweetbot` as it happens).

Here is how you can use it:

1. `cp private-config.sample.json private-config.json`
2. Put the consumer API key and consumer API secret key of the Twitter app in `private-config.json` in `key` and `secret` respectively. You can obtain these from https://developer.twitter.com/en/apps by going to “Details” of the relevant app, and then under the “Keys and tokens” tab.
3. `npm install`
4. `npm link`
5. `whattweetbot-keys`
6. Follow the instructions given. In particular, open the URL in a browser while logged into a Twitter account you want to associate with the Twitter app, grant it access, and enter the PIN on the command-line. Make sure you copy and store the keys given at the end. For the specific case of the WHATWG those need to end up in the private configuration of participate.whatwg.org.
