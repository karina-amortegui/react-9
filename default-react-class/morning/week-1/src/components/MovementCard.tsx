

/**
 * 
 * -------------------
 * Movement Name 
 * Short Summary
 * Full Description
  * fullDescription: {
 *     description: "This is how this movement is done",
 *     bulletPoints: ["First bullet", "Second Bullet", "Third Bullet"]
 * }
 * 
 * --------------------
 * 1. Dead Point
 *  - short summary
 *  - full description
 *  - difficulty
 *  - style 
 *  - exercises
 * 2. Drop Knee
 */

// dummy components

type PropType = {
  id: number,
  movement: string,
  difficulty: number,
  style: string
}


export const MovementCard = ({ id, movement, difficulty, style } : PropType) => {
  
  return (
    //template
    <div>
      <label>Movement Name</label>
      <h2>{movement}</h2>
      <p><b>Difficulty:</b> {difficulty}</p>
      <p><b>Style:</b> {style}</p>
    </div>
  )
};
