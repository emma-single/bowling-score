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

  for (var i = 0; i < frames.length; i++) { /*Go through frames array */
      if (frames[i][0] === 10 || frames[i][1] === 10) {
          if (frames[i][0] === 10) {
              if (frames[i + 1][0] === 10) {
                  frameTotal[i] = frames[i][0] + frames[i + 1][0] + frames[i + 2][0]
              } else {
                  frameTotal[i] = frames[i][0] + frames[i + 1][0] + frames[i + 1][1]
              }
          } else {
              frameTotal[i] = frames[i][1] + frames[i + 1][0]
          }
      } else {
          var sum = frames[i][0] + frames[i][1]

          if (sum === 10) {
              frameTotal[i] = frames[i][0] + frames[i][1] + frames[i + 1][0]
          } else {
              frameTotal[i] = frames[i][0] + frames[i][1]
          }
      }
  }
  for (var j = 0; j < frameTotal.length; j++) {
      runningTotal += frameTotal[j]
  }
  console.log(runningTotal)


  //       for (var j = 0; j < scores.length; j++) { /*go through the array i.e frame[0] */
  //           if (scores[j] === 10) {
  //               if (scores[0] === 10) {
  //                   console.log("Strike!")
  //               }
  //               if (scores[1] === 10) {
  //                   console.log("Spare!")
  //               }
  //           } else {
  //               var valA = scores[0]
  //               var valB = scores[1]
  //               var sum = valA + valB

  //               if (sum === 10) {
  //                   console.log("Spare!")
  //               } else {
  //                   console.log("Just add them together dolt!")
  //               }
  //           }

  //       }
  //   }
  //   console.log(frameTotal)



  //   ORIGINAL RUNNING TOTAL

  //     for (var k = 0; k < frames.length; k++) {
  //         var frameVals = frames[k]
  //         for (var l = 0; l < frameVals.length; l++) {
  //             var valA = frameVals[0]
  //             var valB = frameVals[1]
  //             frameTotal[k] = valA + valB
  //         }
  //     }

  //     for (var k = 0; k < frameTotal.length; k++) {
  //         runningTotal += Number(frameTotal[k])

  //     }

  //   ORIGINAL CONDITIONAL LOOKING FOR 10

  //     if (scores[1] === 10) { /*if the second number is a 10 then follow this path */
  //                 var valA = 10 /*valA is the 10 we get from the current frame */
  //                 var valB = frames[i + 1][0] /*valB is whatever the first number is in the next frame */
  //                 frameTotal[i] = valA + valB
  //             } else if (scores[0] === 10) {
  //                 var valA = 10
  //                 var valB = frames[i + 1][0] + frames[i + 2][0]
  //                 frameTotal[i] = valA + valB

  //   ATTEMPT TWO 

  //   if (scores[j] === 10) {
  //               if (scores[1] === 10) { /*if the second number is a 10 then follow this path */
  //                   var valA = scores[1] /*valA is the 10 we get from the current frame */
  //                   var valB = frames[i + 1][0] /*valB is whatever the first number is in the next frame */
  //                   frameTotal[i] = valA + valB
  //               } else if (scores[0] === 10) {
  //                   var valA = scores[0]
  //                   var valB = frames[i + 1][0] + frames[i + 2][0]
  //                   frameTotal[i] = valA + valB
  //               }

  //           } else {
  //               var valA = scores[0]
  //               var valB = scores[1]
  //               frameTotal[i] = valA + valB

  //               if (frameTotal[i] === 10) {
  //                   var valA = scores[0] + scores[1]
  //                   var valB = frames[i + 1][0]
  //                   frameTotal[i] = valA + valB
  //               } else {
  //                   var valA = scores[0]
  //                   var valB = scores[1]
  //                   frameTotal[i] = valA + valB
  //               }

  //           }

  //       }