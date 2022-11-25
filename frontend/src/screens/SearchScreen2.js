// import React, {useState, useEffect, useRef} from 'react'

// export default function SearchScreen2() {
//     const [name, setName] = useState('')
//     const searchRef = useRef()

//     useEffect(() => {
//         searchRef.current = setSearch(() => {
//             setName()
//         })
//         return () => {
//             clearSearch(searchRef.current)
//         };
//     }, [])

//   return (
//     <div>
//         <input ref={searchRef} type='text'/>
//         Name - {name}
//         <button onClick={() => clearSearch(searchRef.current)}>Search</button>
//     </div>
//   )
// }
