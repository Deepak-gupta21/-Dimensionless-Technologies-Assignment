
import React from 'react';

const SubHeader = () => {
  return (
    <div style={{ padding: '20px', background: '#fff', borderBottom: '1px solid #ddd' , marginTop:'-3em' }}>
     

<div style={{display:'flex',justifyContent:'space-between'}}> 
      
      <div style={{ display:'flex',alignItems:'center',gap:'2em' }}>
        
      <h3 style={{ color:'#1565AD' , marginLeft:'1em' }}>Current Licence:</h3>
      <p>USD/CAD   AUD/USD</p>

      </div>
      
      <div style={{ display:'flex', flexDirection:'column' }}>
 
      <h2>Welcome, Username</h2>
      <p style={{marginTop:'-1em' , color:'#888'}}>Good to see you again!</p>

      </div>

</div>

    </div>
  );
};

export default SubHeader;