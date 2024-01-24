import React from "react"

export default function InformationCard() {
  return (
    <div id="info-container">
      <section id="result">
        <div id="info-card">
          {
            <div>
              <h3>
                <h1>Instruction Manual</h1>
                <br />
                <div>
                  <div className="centered-div">
                    <img class="info-png" src="elementalBoost.png" alt />
                  </div>
                  <div className="colorTeal"> Element Boost</div>
                  Temporarily strengthens a chosen element, making it win
                  against one additional element.
                </div>
                <br />
                <div>
                  <div className="centered-div">
                    <img class="info-png" src="doublePoints.png" alt />
                  </div>
                  <div className="colorRed">Double Points</div>
                  The next winning round grants double points.
                </div>
                <br />
                <div>
                  <div className="centered-div">
                    <img class="info-png" src="Prediction.png" alt />
                  </div>
                  <div className="colorDarkGreen">Prediction</div>
                  Reveals the computer's next choice.
                </div>
                <br />
                <div>
                  <div className="centered-div">
                    <img class="info-png" src="Shield.png" alt />
                  </div>
                  <div className="colorShieldGreen">Shield</div>
                  Negates the effect of the next loss.
                </div>
                <br />
                <div>
                  <div className="centered-div">
                    <img class="info-png" src="elementalSwap.png" alt />
                  </div>
                  <div className="colorOrange">Element Swap</div>
                  Allows changing the chosen element after reveadivng the
                  computer’s choice.
                </div>
                <br />
              </h3>
            </div>
          }
        </div>
      </section>
    </div>
  )
}
