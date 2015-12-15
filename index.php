<!DOCTYPE html>

 <html>
    <head>
		<!-- STYLESHEETS -->
    <link rel="stylesheet" type="text/css" href="style/style.css" >

        <!-- LIBRARIES -->
          <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
          <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script><script src="http://code.jquery.com/jquery-latest.js"></script>
          <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

         <!--<script type="text/javascript" src="script/script2.js"></script> -->
         <script type="text/javascript" src="script/slideshow.js"></script>
         <script type="text/javascript" src="script/regularExpressions.js"></script>

         <script>
            $(document).ready( function() {
              $('#thorningslideshow').slideshow({'delay':5000, 'fadeSpeed': 2000});   

               $("#bil").mouseover(function(){
                   $("#bilbox").css("left", "-50px");
               });

               $("#bil").mouseout(function(){
                   $("#bilbox").css("left", "-550px");
               });

            });
         </script>

        <title>Javascript learning with galary, expressions</title>
    </head>


    <body>
      
        <!-- main content -->
        <main>
          <!--
          <div id="content">
              <div>
                <select onchange="myChangeFunction(this)">
                    <option>brian</option>
                    <option>trine</option>
                </select>

                <p id="demo">A Paragraph</p>
                <button type="button" 
                        onclick="myClickFunction()"
                        onmouseover="myOverFunction()"
                        onmouseout="myOutFunction()"                       
                        >Try it</button>
              </div>
          </div>

          <div id="inserting">
              <a href"www.thornings.dk">link</a>
          </div>
          -->
           <div id="thorningslideshow">
              <div id="images" class="grow">
                  <img  src="images/bil.png" alt="" />
                  <img  src="images/bil2.png" alt="" />
                  <img  src="images/bil3.png" alt="" />
                  <img  src="images/bil4.png" alt="" />
              </div>
          </div>

          <div id="imagesizer">
                  <img  src="images/bil4.png" alt="" class="clip-ellipse" />
          </div>


          <ul>
            <li class="doorone">
              <p>TOTAL SHOWOFF</p>
            </li>
            <li class="doortwo">
              <p>JUST SHOWOFF</p>
            </li>
            <li class="doorthree">
              <p>UHMM SHOWOFF</p>
            </li>
            <li class="doorfour">
              <p>LEX SHOWOFF</p>
            </li>
          </ul>


          <div id="bil">
              <div id="bilbox">I LOVE CODE</div>
          </div>

          <div class="sections">
              <img src="images/bil3.png" />
              <div class="layer">Lorem Ipsum</div>
          </div>

          <div class="roundboxes">
              <div class="round">ONE</div>
              <div class="round">TWO</div>
          </div>

          <div class="realani">
              <div class="round">ANI</div>
              <div class="round">INA</div>
          </div>                


        </main>             
    </body>
</html>
