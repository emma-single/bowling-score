  var frames = [
      [1, 2],
      [6, 4],
      [5, 4],
      [10, 0],
      [7, 2],
      [10, 0],
      [10, 0],
      [5, 2],
      [7, 0],
      [4, 4]
  ]
  var frameTotal = []
  var runningTotal = 0

  for (var i = 0; i < frames.length; i++) {
      var frameVals = frames[i]
      for (var j = 0; j < frameVals.length; j++) {
          var valA = frameVals[0]
          var valB = frameVals[1]
          frameTotal[i] = valA + valB
      }
  }
  for (var k = 0; k < frameTotal.length; k++) {
      runningTotal += Number(frameTotal[k])

  }


  console.log(runningTotal)