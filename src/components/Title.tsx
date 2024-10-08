

interface FontStyleOptions{
    title:string;
    fontSize?:string
}

function Title({title,fontSize='50px'}:FontStyleOptions) {


    const [first,middle,last] = separateLetters(title)
  return (
    
   <span >
    <span style={{
    
    
        // WebkitBackgroundClip: 'text',
        // WebkitTextFillColor: 'transparent',
        fontSize:fontSize?fontSize:'40px',
        fontWeight: 'bold',
      // backgroundColor:'blue'
      

      }}
      className='text-purple-950 dark:text-purple-700'
      >
        {first}
      </span>
      <Stroked fontSize={fontSize} title={middle}/>
      <span style={{

        // WebkitBackgroundClip: 'text',
        // WebkitTextFillColor: 'transparent',
        fontSize:fontSize,
        fontWeight: 'bold'
      }}
      className='text-purple-950 dark:text-purple-700'
      >
        {last}
      </span></span>
  )
}

export default Title



function Stroked({title,fontSize}:FontStyleOptions) {
  

    return (
      <span style={{

        fontSize:fontSize,
  
      }} className='font-bold text-transparent text-stroke-1 dark:text-stroke-purple-700 text-stroke-purple-950'>
        {title}
      </span>
    );
  }

    function separateLetters(str:string) {
   
        if (str.length < 2) {
            return [str, '', '']; // Return original string and two empty strings
        }
    
        // Separate the first letter
        const first = str.charAt(0);
        
        // Separate the middle letters
        const middle = str.slice(1, -1);
    
        // Separate the last letter
        const last = str.charAt(str.length - 1);
    
        return [first, middle, last];
    }
