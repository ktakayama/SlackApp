
var _ = Underscore.load();

/**
 * @type {String}
 */
var SCOPE_IDENTIFY="identify";
/**
 * @type {String}
 */
var SCOPE_READ="read";
/**
 * @type {String}
 */
var SCOPE_POST="post";

/**
 * Create an Slack API Client 
 * @param {String} token API Token via https://api.slack.com/tokens
 * @return {SlackApp} return an Slack API Client 
 */
function create(token){
  return new SlackApp(null, null, null, null, {token : token});
}

/**
 * Create an Slack API Client by ClientId
 * @param {String} team team ID
 * @param {String} clientId client id
 * @param {String} clientSecret client secret
 * @param {String[]} scopes scopes
 * @param {Object} option optional the option parameter. You can set property below.
 * <table>
 *   <tr>
 *     <td><b>Name</b></td>
 *     <td><b>Type</b></td>
 *     <td><b>Description</b></td>
 *   </tr>
 *   <tr>
 *     <td>token</td>
 *     <td><code>String</code></td>
 *     <td>The API Token via <a href="https://api.slack.com/tokens">https://api.slack.com/tokens</a></td>
 *   </tr>
 *   <tr>
 *     <td>name</td>
 *     <td><code>String</code></td>
 *     <td>The suffix name for PropertiesService key. Default : <code>""</code></td>
 *   </tr>
 * </table>
 * @return {SlackApp} return an Slack API Client 
 */
function createByClientId(team, clientId, clientSecret, scopes, option){
  return new SlackApp(team, clientId, clientSecret, scopes, option);
}

/**
 * This method helps you test your calling code.<br>
 * https://api.slack.com/methods/api.test
 * @param {Object} params you can set below.
 * <table class="arguments table table-condensed">
 *         <tbody>
 *         <tr>
 *             <td><b>Name</b></td>
 *             <td><b>Type</b></td>
 *             <td><b>Description</b></td>
 *         </tr>
 *         <tr>
 *             <td style="white-space:nowrap"><code>error</code></td>
 *             <td style="white-space:nowrap"><code>Object</code></td>
 *             <td><p>Error response to return</p></td>
 *         </tr>
 *         <tr>
 *             <td style="white-space:nowrap"><code>foo</code></td>
 *             <td style="white-space:nowrap"><code>bar</code></td>
 *             <td><p>example property to return</p></td>
 *         </tr>
 *         </tbody></table>
 * @return {Object} api result. The response includes any supplied arguments:
 *  <pre><code>
 * {
 *     "ok": true,
 *     "args": {
 *         "foo": "bar",
 *     }
 * }
 *  </code></pre>
 *  If called with an <code>error</code> argument an error response is returned:
 *  <pre><code>
 *  {
 *     "ok": false,
 *     "error": "my_error",
 *     "args": {
 *         "error": "my_error",
 *     }
 * }
 * </code></pre>
 */
function apiTest(params) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method checks authentication and tells you who you are.
 * @return {Object} api result
 * <pre><code>
 * {
 *     "ok": true,
 *     "url": "https:\/\/myteam.slack.com\/",
 *     "team": "My Team",
 *     "user": "cal",
 *     "team_id": "T12345",
 *     "user_id": "U12345"
 * }
 * </code></pre>
 */
function authTest() {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method returns a portion of messages/events from the specified channel. To read the entire history for a channel, call the method with no latest or oldest arguments, and then continue paging using the instructions below.
 * https://api.slack.com/methods/conversations.history
 * @param {string} channelId Channel to fetch history for.
 * @param {Object} optParams optional
 */
function conversationsHistory(channelId, optParams) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method returns information about a team channel.
 * @param {string} channelId Channel to get info on
 * @return {Object} api result
 * <pre><code>
 * {
 *     "ok": true,
 *     "channel": {
 *         "id": "C024BE91L",
 *         "name": "fun",
 * 
 *         "created": "1360782804",
 *         "creator": "U024BE7LH",
 * 
 *         "is_archived": false,
 *         "is_general": false,
 *         "is_member": true,
 * 
 *         "members": [ … ],
 * 
 *         "topic": { … },
 *         "purpose": { … }
 * 
 *         "last_read": "1401383885.000061",
 *         "latest": { … }
 *         "unread_count": 0,
 *     }
 * }
 * </code></pre>
 */
function conversationsInfo(channelId) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method is used to invite a user to a channel. The calling user must be a member of the channel.
 * @param {string} channelId Channel to invite user to.
 * @param {string} userId User to invite to channel.
 * @return {Object} api result 
 * <pre><code>
 * {
 *     "ok": true,
 *     "channel": {
 *         "id": "C024BE91L",
 *         "name": "fun",
 *         "created": "1360782804",
 *         "creator": "U024BE7LH",
 *         "is_archived": false,
 *         "is_member": true,
 *         "is_general": false,
 *         "last_read": "1401383885.000061",
 *         "latest": { … }
 *         "unread_count": 0,
 *         "members": [ … ],
 *         "topic": {
 *             "value": "Fun times",
 *             "creator": "U024BE7LV",
 *             "last_set": "1369677212"
 *         },
 *         "purpose": {
 *             "value": "This channel is for fun",
 *             "creator": "U024BE7LH",
 *             "last_set": "1360782804"
 *         }
 *     },
 * }
 * </code></pre>
 */
function conversationsInvite(channelId, userId) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method is used to join a channel. If the channel does not exist, it is created.
 * @param {string} channelName Name of channel to join
 * @return {Object} api result
 *  <pre><code>
 *  {
 *     "ok": true,
 *     "channel": {
 *         "id": "C024BE91L",
 *         "name": "fun",
 *         "created": "1360782804",
 *         "creator": "U024BE7LH",
 *         "is_archived": false,
 *         "is_member": true,
 *         "is_general": false,
 *         "last_read": "1401383885.000061",
 *         "latest": { … }
 *         "unread_count": 0,
 *         "members": [ … ],
 *         "topic": {
 *             "value": "Fun times",
 *             "creator": "U024BE7LV",
 *             "last_set": "1369677212"
 *         },
 *         "purpose": {
 *             "value": "This channel is for fun",
 *             "creator": "U024BE7LH",
 *             "last_set": "1360782804"
 *         }
 *     },
 * }
 *  </code></pre>
 *  If you are already in the channel, the response is slightly different. already_in_channel will be true, and a limited channel object will be returned. This allows a client to see that the request to join GeNERaL is the same as the channel #general that the user is already in:
 *  <pre><code>
 *  {
 *     "ok": true,
 *     "already_in_channel": true,
 *     "channel": {
 *         "id": "C024BE91L",
 *         "name": "fun",
 *         "created": "1360782804",
 *         "creator": "U024BE7LH",
 *         "is_archived": false,
 *         "is_general": false
 *     }
 * }
 *  </code></pre>
 */
function conversationsJoin(channelId) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method allows a user to remove another member from a team channel.
 * @param {string} channelId Channel to remove user from.
 * @param {string} userId User to remove from channel.
 * @return {Object} api result
 * <pre><code>
 * {
 *     "ok": true
 * }
 * </code></pre>
 */
function conversationsKick(channelId, userId) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method is used to leave a channel.
 * @param {string} channelId Channel to leave
 * @return {Object} api result
 * <pre><code>
 * {
 *     "ok": true
 * }
 * </code></pre>
 * This method will not return an error if the user was not in the channel before it was called. Instead the response will include a not_in_channel property:
 * <pre><code>
 * {
 *     "ok": true,
 *     "not_in_channel": true
 * }
 * </code></pre>
 */
function conversationsLeave(channelId) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method returns a list of all channels in the team. This includes channels the caller is in, channels they are not currently in, and archived channels. The number of (non-deactivated) members in each channel is also returned.
 * @param {boolean} optIsExecludeArchived optional true/false
 * @return {Object} api result
 * <pre><code>
 * {
 *     "ok": true,
 *     "channels": [
 *         {
 *             "id": "C024BE91L",
 *             "name": "fun",
 *             "created": "1360782804",
 *             "creator": "U024BE7LH",
 *             "is_archived": false,
 *             "is_member": false,
 *             "num_members": 6,
 *             "topic": {
 *                 "value": "Fun times",
 *                 "creator": "U024BE7LV",
 *                 "last_set": "1369677212"
 *             },
 *             "purpose": {
 *                 "value": "This channel is for fun",
 *                 "creator": "U024BE7LH",
 *                 "last_set": "1360782804"
 *             }
 *         },
 *         ....
 *     ]
 * }
 * </code></pre>
 */
function conversationsList(optIsExecludeArchived) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method moves the read cursor in a channel.
 * @param {string} channelId Channel to set reading cursor in.
 * @param {Number} timestamp Timestamp of the most recently seen message.
 * @return {Object} api result
 * <pre><code>
 * {
 *     "ok": true
 * } 
 * </code></pre>
 */
function conversationsMark(channelId, timestamp) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method is used to change the purpose of a channel. The calling user must be a member of the channel.
 * @param {string} channelId Channel to set the purpose of
 * @param {string} purpose The new purpose
 * @return {Object} api result
 */
function conversationsSetPurpose(channelId, purpose) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method is used to change the topic of a channel. The calling user must be a member of the channel.
 * @param {string} channelId Channel to set the topic of
 * @param {string} topic The new topic
 * @return {Object} api result
 */
function conversationsSetTopic(channelId, topic) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method deletes a message from a channel.
 * @param {string} channelId Channel containing the message to be deleted.
 * @param {Number} timestamp Timestamp of the message to be deleted.
 * @return {Object} api result
 */
function chatDelete(channelId, timestamp) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method posts a message to a channel.
 * @param {string} channelId Channel to send message to. Can be a public channel, private group or IM channel. Can be an encoded ID, or a name.
 * @param {string} text Text of the message to send. See below for an explanation of formatting.
 * @param {Object} option optional please see https://api.slack.com/methods/chat.postMessage
 * @return {Object} api result
 */
function chatPostMessage(channelId, text , option) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method updates a message in a channel.
 * @param {string} channelId Channel containing the message to be updated.
 * @param {Number} timestamp Timestamp of the message to be updated.
 * @param {string} text New text for the message, using the default formatting rules.
 * @return {Object} api result
 */
function chatUpdate(channelId, timestamp, text) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method lists the custom emoji for a team.
 * @return {Object} api result
 */
function emojiList() {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method returns information about a file in your team.
 * @param {string} fileId File to fetch info for
 * @param {Object} option optinal
 * @return {Object} api result
 */
function filesInfo(fileId, option) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method returns a list of files within the team. It can be filtered and sliced in various ways.
 * @param {Object} option optional
 * @return {Object} api result
 */
function filesList(option) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method allows you to create or upload an existing file.
 * @param {Blob} fileBlob file blob
 * @param {Object} option optional
 * @return {Object} api result
 */
function filesUpload(fileBlob, option) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method creates a private group.
 * @param {string} name Name of group to create
 * @return {Object} api result
 */
function conversationsCreate(name) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method takes an existing private group and performs the following steps:
 *
 * Renames the existing group (from "example" to "example-archived").
 * Archives the existing group.
 * Creates a new group with the name of the existing group.
 * Adds all members of the existing group to the new group.
 * This is useful when inviting a new member to an existing group while hiding all previous chat history from them. In this scenario you can call groups.createChild followed by groups.invite.
 *
 * The new group will have a special parent_group property pointing to the original archived group. This will only be returned for members of both groups, so will not be visible to any newly invited members.
 * @param {string} channelId Group to clone and archive.
 * @return {Object} api result
 */
function conversationsCreateChild(channelId) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 This method lets you manually override the calling user's presence value. Consult the presence documentation for more details.
 *
 * @return {Object} api result
 */
function presenceSetAway() {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 This method lets you manually override the calling user's presence value. Consult the presence documentation for more details.
 *
 * @return {Object} api result
 */
function presenceSetActive() {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method allows to to search both messages and files in a single call.
 * @param {string} query Search query. May contains booleans, etc.
 * @param {Object} option optional
 * @return {Object} api result
 */
function searchAll(query, option) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method returns files matching a search query.
 * @param {string} query Search query. May contains booleans, etc.
 * @param {Object} option optional
 * @return {Object} api result
 */
function searchFiles(query, option) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method returns messages matching a search query.
 * @param {string} query Search query. May contains booleans, etc.
 * @param {Object} option optional
 * @return {Object} api result
 */
function searchMessages(query, option) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method lists the items starred by a user.
 * @param {Object} option optional
 * @return {Object} api result
 */
function starsList(option) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method returns information about a team member.
 * @param {string} userId User to get info on
 * @return {Object} api result
 */
function usersInfo(userId) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method returns a list of all users in the team. This includes deleted/deactivated users.
 * @return {Object} api result
 */
function usersList() {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * This method lets the slack messaging server know that the authenticated user is currently active. Consult the presence documentation for more details.
 * @return {Object} api result
 */
function usersSetActive() {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * Save access_token via code
 * @param {string} code access_code
 */
function saveAccessToken(code) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * Get Authorize url for oauth2
 * @param {Function} callback
 * @param {Object} optArg optional
 * @return {string}
 */
function getAuthorizeUrl(callback,optArg) {
    throw new Error("this method should not call direct, please call create method.")
}

/**
 * Get Authorize Callback url for oauth2
 * @param callback
 * @param optArg
 */
function getCallbackURL(callback,optArg) {
    throw new Error("this method should not call direct, please call create method.")
}
;

var _this = this,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

(function(exports) {
  var SlackApp;
  SlackApp = (function() {

    SlackApp.name = 'SlackApp';

    function SlackApp(team, clientId, clientSecret, scopes, option) {
      this.team = team;
      this.clientId = clientId;
      this.clientSecret = clientSecret;
      this.scopes = scopes;
      this.option = option != null ? option : {};
      _this.uox = __bind(_this.uox, this);

      _this.getAuthorizeUrl = __bind(_this.getAuthorizeUrl, this);

      _this.saveAccessToken = __bind(_this.saveAccessToken, this);

      _this.getCredencial_ = __bind(_this.getCredencial_, this);

      _this.fetch_ = __bind(_this.fetch_, this);

      _this.usersSetActive = __bind(_this.usersSetActive, this);

      _this.usersList = __bind(_this.usersList, this);

      _this.usersInfo = __bind(_this.usersInfo, this);

      _this.starsList = __bind(_this.starsList, this);

      _this.searchMessages = __bind(_this.searchMessages, this);

      _this.searchFiles = __bind(_this.searchFiles, this);

      _this.searchAll = __bind(_this.searchAll, this);

      _this.presenceSetActive = __bind(_this.presenceSetActive, this);

      _this.presenceSetAway = __bind(_this.presenceSetAway, this);

      _this.conversationsCreateChild = __bind(_this.conversationsCreateChild, this);

      _this.conversationsCreate = __bind(_this.conversationsCreate, this);

      _this.filesUpload = __bind(_this.filesUpload, this);

      _this.filesList = __bind(_this.filesList, this);

      _this.filesInfo = __bind(_this.filesInfo, this);

      _this.emojiList = __bind(_this.emojiList, this);

      _this.chatUpdate = __bind(_this.chatUpdate, this);

      _this.chatPostMessage = __bind(_this.chatPostMessage, this);

      _this.chatDelete = __bind(_this.chatDelete, this);

      _this.conversationsSetTopic = __bind(_this.conversationsSetTopic, this);

      _this.conversationsSetPurpose = __bind(_this.conversationsSetPurpose, this);

      _this.conversationsMark = __bind(_this.conversationsMark, this);

      _this.conversationsList = __bind(_this.conversationsList, this);

      _this.conversationsLeave = __bind(_this.conversationsLeave, this);

      _this.conversationsKick = __bind(_this.conversationsKick, this);

      _this.conversationsJoin = __bind(_this.conversationsJoin, this);

      _this.conversationsInfo = __bind(_this.conversationsInfo, this);

      _this.conversationsInvite = __bind(_this.conversationsInvite, this);

      _this.conversationsHistory = __bind(_this.conversationsHistory, this);

      _this.authTest = __bind(_this.authTest, this);

      _this.apiTest = __bind(_this.apiTest, this);

      this.BASE_URI = "https://slack.com";
      this.API_ENDPOINT = "" + this.BASE_URI + "/api/";
      this.AUTH_ENDPOINT = "" + this.BASE_URI + "/oauth/authorize";
      this.prop = PropertiesService.getUserProperties();
      if (!this.option.name) this.option.name = "";
      if (this.option.token) {
        this.prop.setProperty("SLACK_credencial" + this.option.name, JSON.stringify({
          "access_token": this.option.token
        }));
      }
    }

    SlackApp.prototype.apiTest = function(params) {
      if (params == null) params = {};
      return this.fetch_("api.test", params);
    };

    SlackApp.prototype.authTest = function() {
      return this.fetch_("auth.test");
    };

    SlackApp.prototype.conversationsHistory = function(channelId, optParams) {
      if (optParams == null) optParams = {};
      return this.fetch_("conversations.history", _.extend({
        channel: channelId
      }, optParams));
    };

    SlackApp.prototype.conversationsInvite = function(channelId, userId) {
      return this.fetch_("conversations.invite", {
        channel: channelId,
        user: userId
      });
    };

    SlackApp.prototype.conversationsInfo = function(channelId) {
      return this.fetch_("conversations.info", {
        channel: channelId
      });
    };

    SlackApp.prototype.conversationsJoin = function(channelId) {
      return this.fetch_("conversations.join", {
        name: channelId
      });
    };

    SlackApp.prototype.conversationsKick = function(channelId, userId) {
      return this.fetch_("conversations.kick", {
        channel: channelId,
        user: userId
      });
    };

    SlackApp.prototype.conversationsLeave = function(channelId) {
      return this.fetch_("conversations.leave", {
        channel: channelId
      });
    };

    SlackApp.prototype.conversationsList = function(optIsExecludeArchived) {
      var execludeArchived;
      if (optIsExecludeArchived == null) optIsExecludeArchived = false;
      execludeArchived = optIsExecludeArchived ? 1 : 0;
      return this.fetch_("conversations.list", {
        exclude_archived: execludeArchived
      });
    };

    SlackApp.prototype.conversationsMark = function(channelId, timestamp) {
      return this.fetch_("conversations.mark", {
        channel: channelId,
        ts: timestamp
      });
    };

    SlackApp.prototype.conversationsSetPurpose = function(channelId, purpose) {
      return this.fetch_("conversations.setPurpose", {
        channel: channelId,
        purpose: purpose
      });
    };

    SlackApp.prototype.conversationsSetTopic = function(channelId, topic) {
      return this.fetch_("conversations.setTopic", {
        channel: channelId,
        topic: topic
      });
    };

    SlackApp.prototype.chatDelete = function(channelId, timestamp) {
      return this.fetch_("chat.delete", {
        channel: channelId,
        ts: timestamp
      });
    };

    SlackApp.prototype.chatPostMessage = function(channelId, text, option) {
      if (option == null) option = {};
      return this.fetch_("chat.postMessage", _.extend({
        channel: channelId,
        text: text
      }, option));
    };

    SlackApp.prototype.chatUpdate = function(channelId, timestamp, text) {
      return this.fetch_("chat.update", {
        channel: channelId,
        text: text,
        ts: timestamp
      });
    };

    SlackApp.prototype.emojiList = function() {
      return this.fetch_("emoji.list");
    };

    SlackApp.prototype.filesInfo = function(fileId, option) {
      if (option == null) option = {};
      return this.fetch_("files.info", _.extend({
        file: fileId
      }, option));
    };

    SlackApp.prototype.filesList = function(option) {
      if (option == null) option = {};
      return this.fetch_("files.list", option);
    };

    SlackApp.prototype.filesUpload = function(fileBlob, option) {
      if (option == null) option = {};
      return this.fetch_("files.upload", _.extend({
        file: fileBlob
      }, option));
    };

    SlackApp.prototype.conversationsCreate = function(name) {
      return this.fetch_("conversations.create", {
        name: name
      });
    };

    SlackApp.prototype.conversationsCreateChild = function(channelId) {
      return this.fetch_("conversations.createChild", {
        channel: channelId
      });
    };

    SlackApp.prototype.presenceSetAway = function() {
      return this.fetch_("presence.set", {
        presence: "away"
      });
    };

    SlackApp.prototype.presenceSetActive = function() {
      return this.fetch_("presence.set", {
        presence: "active"
      });
    };

    SlackApp.prototype.searchAll = function(query, option) {
      if (option == null) option = {};
      return this.fetch_("search.all", _.extend({
        query: query
      }, option));
    };

    SlackApp.prototype.searchFiles = function(query, option) {
      if (option == null) option = {};
      return this.fetch_("search.files", _.extend({
        query: query
      }, option));
    };

    SlackApp.prototype.searchMessages = function(query, option) {
      if (option == null) option = {};
      return this.fetch_("search.messages", _.extend({
        query: query
      }, option));
    };

    SlackApp.prototype.starsList = function(option) {
      if (option == null) option = {};
      return this.fetch_("stars.list", option);
    };

    SlackApp.prototype.usersInfo = function(userId) {
      return this.fetch_("users.info", {
        user: userId
      });
    };

    SlackApp.prototype.usersList = function() {
      return this.fetch_("users.list");
    };

    SlackApp.prototype.usersSetActive = function() {
      return this.fetch_("users.setActive");
    };

    SlackApp.prototype.fetch_ = function(rpcMethod, param, option) {
      var access_token, opt, res,
        _this = this;
      if (param == null) param = {};
      if (option == null) option = {};
      access_token = this.getCredencial_("access_token");
      if (!(access_token != null)) throw new Error("Please call authorize");
      opt = {
        method: "POST",
        payload: param
      };
      opt.payload.token = access_token;
      res = this.uox(function() {
        return UrlFetchApp.fetch("" + _this.API_ENDPOINT + rpcMethod, opt);
      });
      return JSON.parse(res.getContentText());
    };

    SlackApp.prototype.getCredencial_ = function(name) {
      var credencial;
      if (this.cache && this.cache[name]) return this.cache[name];
      credencial = this.prop.getProperty("SLACK_credencial" + this.option.name);
      if (!(credencial != null)) return null;
      this.cache = JSON.parse(credencial);
      return this.cache[name];
    };

    SlackApp.prototype.saveAccessToken = function(code) {
      var res,
        _this = this;
      res = this.uox(function() {
        return UrlFetchApp.fetch("" + _this.API_ENDPOINT + "oauth.access", {
          method: "post",
          payload: {
            client_id: _this.clientId,
            client_secret: _this.clientSecret,
            redirect_uri: _this.prop.getProperty("SLACK_redirectURI" + _this.option.name),
            code: code
          }
        });
      });
      this.prop.setProperty("SLACK_credencial" + this.option.name, res.getContentText());
      return JSON.parse(res.getContentText()).access_token;
    };

    SlackApp.prototype.getAuthorizeUrl = function(callback, optArg) {
      var redirectUri;
      redirectUri = this.getCallbackURL(callback, optArg);
      this.prop.setProperty("SLACK_redirectURI" + this.option.name, redirectUri);
      return "" + this.AUTH_ENDPOINT + "?client_id=" + this.clientId + "&scope=" + (this.scopes.join(',')) + "&response_type=code&redirect_uri=" + redirectUri;
    };

    SlackApp.prototype.getCallbackURL = function(callback, optArg) {
      var builder, stateToken, url;
      if (optArg == null) optArg = {};
      url = ScriptApp.getService().getUrl();
      if (url.indexOf("/exec") >= 0) {
        url = url.slice(0, -4) + 'usercallback?state=';
      } else {
        url = url.slice(0, -3) + 'usercallback?state=';
      }
      builder = ScriptApp.newStateToken().withMethod(callback);
      if (optArg.timeout) builder.withTimeout(optArg.timeout);
      if (optArg) builder.withArgument("param", JSON.stringify(optArg));
      stateToken = builder.createToken();
      return "" + url + stateToken;
    };

    SlackApp.prototype.uox = function(f, retry) {
      var count;
      if (retry == null) retry = 3;
      count = 0;
      while (true) {
        try {
          return f();
        } catch (e) {
          if (count > retry) throw e;
          Utilities.sleep(1000);
          count++;
        }
      }
    };

    return SlackApp;

  })();
  return exports.SlackApp = SlackApp;
})(this);
