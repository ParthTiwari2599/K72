import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className="relative mx-auto max-w-[100vw] overflow-hidden font-[font2] flex items-center justify-center gap-4">
      <p className="absolute lg:w-[16vw] w-[55vw] right-0 bottom-28 lg:bottom-22 lg:text-lg text-xs lg:leading-relaxed leading-tight overflow-hidden">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
      </p>

      <div className="rounded-full border-2 lg:border-[3px] hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center justify-center h-16 lg:h-[7rem] px-6 lg:px-20 max-w-full overflow-hidden">
        <Link to="/projects" className="text-[9vw] leading-none lg:text-[7rem] lg:mt-1 whitespace-nowrap">
          Projects
        </Link>
      </div>

      <div className="rounded-full border-2 lg:border-[3px] hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center justify-center h-16 lg:h-[7rem] px-6 lg:px-20 max-w-full overflow-hidden">
        <Link to="/agence" className="text-[9.5vw] leading-none lg:text-[7rem] lg:mt-1 whitespace-nowrap">
          agence
        </Link>
      </div>
    </div>
  )
}

export default HomeBottomText
