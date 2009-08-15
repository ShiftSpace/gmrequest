if(typeof GM_log != 'undefined')
{
  Browser.Request = function() {
    return $try(function() {
      return new GM.Request();
    }, function() {
      return new XMLHttpRequest();
    }, function() {
      return new ActiveXObject('MSXML2.XMLHTTP');
    });
  };

  var GM = {};
  GM.Request = new Class({
    name: "GM.Request",
    initialize: function(force) {
      if(!GM_log && !force) throw Error();
      this.headers = {};
    },
  
    __onreadystatechange__: function(responseDetails) {
      this.status = responseDetails.status;
      this.statusText = responseDetails.statusText;
      this.responseHeaders = responseDetails.responseHeaders;
      this.responseText = responseDetails.responseText;
      this.readyState = responseDetails.readyState;
      if(this.onreadystatechange && $type(this.onreadystatechange) == 'function') this.onreadystatechange();
    },
  
    open: function(method, url) {
      this.method = method;
      this.url = url;
    },
  
    setRequestHeader: function(key, values) { this.headers[key] = value; },
    getResponseHeader: function(key) { return this.responseHeaders[key]; },
    send: function(data) {
      GM_xmlhttpRequest({
        method: this.method,
        url: this.url,
        headers: this.headers,
        data: data,
        onreadystatechange: this.__onreadystatechange__.bind(this)
      });
    }
  });
};