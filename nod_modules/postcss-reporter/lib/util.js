exports.getLocation = function (message) {
  var messageNode = message.node;

  var location = {
    line: message.line,
    column: message.column,
  };

  var messageInput = messageNode && messageNode.source && messageNode.source.input;

  if (!messageInput) return location;

  var originLocation =
    messageInput.origin && messageInput.origin(message.line, message.column);
  if (originLocation) return originLocation;

  location.file = messageInput.file || messageInput.id;
  return location;
};
