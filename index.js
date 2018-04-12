/**
 * Simple file chunker util.
 *
 * @version 0.01 Nov 03, 2017
 *
 */

(function () {
  'use strict'
  if (typeof exports === "object" && exports &&
    typeof module === "object" && module && module.exports === exports) {
    module.exports = chunkFile;
  } else if (window.jQuery) {
    window.jQuery.fn.chunkFile = chunkFile;
  } else {
    window.chunkFile = chunkFile;
  }

  var defaultChunkSize = 1048576;

  /**
  * Given a file object and a chunksize, return an array of file chunks
  *
  * @param {File} file - File to be chunked
  * @param {Number} chunkSize - max size of chunks in bytes or megabytes
  * @param {Boolean} useMegabyte - flag whether to interpret size as mb
  * @returns {Array}
  */
  function chunkFile(file, chunkSize, useMegabyte) {
    if (chunkSize && useMegabyte) {
      chunkSize = mtob(chunkSize);
    }
    chunkSize = chunkSize || defaultChunkSize;
    var size = file.size;
    var numChunks = Math.ceil(size / chunkSize);
    var start = 0;
    var end = chunkSize;
    var chunks = [];
    while (start < size) {
      chunks.push(file.slice(start, end));
      start = end;
      end = start + chunkSize;
    }
    return chunks;
  }
  /**
  * convert mb to bytes for a friendlier interface
  *
  * @param {Number} mb - megabytes to convert
  * @returns {Number}
  */
  function mtob(mb) {
    return mb * defaultChunkSize;
  }
})()
