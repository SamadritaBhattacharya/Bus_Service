import React from 'react';
import './HomePage.css';

function HomePage() {
 return (
    <div className="HomeP">
      <header>
        <nav>
          {/* <Link href={'/'} className="title">Logo</Link> */}
          <p className='logo'>Logo</p>
          <ul>
            <li>
              <a href='#'>Games</a>
            </li>
            <li>
              <a href='#'>Map</a>
            </li>
            <li>
              <a href='#'>Pay-chart</a>
            </li>
            <li>
              <a href='#'>Theme</a>
            </li>
            <li className='hamburger'>
               <a >
                 <div className='bar'>-</div> </a>
             </li>
            
          </ul>
                   
        </nav>
      
      </header>
      <main>
        <button className='ticketBook'><b>Book your tickets </b></button>
        <img src="logo192.png" alt='bus'></img>
     
        <div class="buttonList">
          <button className='previous stop'>Previous Stop</button>
          <button className='current stop'>Current Stop</button>
          <button className='next stop'>Next Stop</button>
          <p>Date and Time </p>

          {/* <script>

          var currentdate = new Date();
                var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth() 
                + "/" + currentdate.getFullYear() + " @ " 
                + currentdate.getHours() + ":" 
                + currentdate.getMinutes() + ":" + currentdate.getSeconds();

          </script> */}

                
        </div>
      </main>
      <footer>
        <p>&copy; 2022 Book Your Game. All rights reserved.</p>
      </footer>
    </div>
 );
}

export default HomePage;