function navbar() {
  return `<div id="brand_image">
  <a href="/index.html"><img src="https://cloudfront.fitnessblender.com/assets/img/logos/fb-logo.svg"
      alt="reload" /></a>
</div>

<div id="nav_dropdown">
  <div id="main">

    <ul>
      <li>
        <div class="header-menu">
          <a href="../page/workout.html" class="menu">WORKOUTS<span class="material-symbols-outlined" class="arrow_icon">
          arrow_drop_down
        </span> </a>
          <ul class="sub-menu" id="">
            <li><a href="../page/workout-plans.html" class="menu-content"><i class="icon -workout-videos" aria-hidden="true"></i>
                Workout Plans</a></li>
          </ul>
        </div>
      </li>


      <li>
        <div class="header-menu">
          <a href="../page/programs.html" class="menu">PROGRAMS<span class="material-symbols-outlined" class="arrow_icon">
          arrow_drop_down
        </span></a>
          <ul class="sub-menu" id="">

            <li><a href="../page/workout-plans.html" class="menu-content"><i class="icon -workout-videos" aria-hidden="true"></i>
                Workout Programs</a></li>
            <li><a href="../page/meals-plans.html" class="menu-content"><i class="icon -workout-programs" aria-hidden="true"></i></i>Meal
                Plans</a></li>

            <li><a href="../page/pilotplans.html" class="menu-content"><i class="icon -workout-programs" aria-hidden="true"></i></i>Pilot
                Programs</a></li>
          </ul>
        </div>
      </li>

      <li>
        <div class="header-menu">
          <a href="../page/healthliving.html" class="menu">HEALTHY LIVING <span class="material-symbols-outlined" class="arrow_icon">
          arrow_drop_down
        </span></a>
          <ul class="sub-menu" id="">
            <li><a href="../page/expertarticles.html" class="menu-content"><i class="icon -fitness" aria-hidden="true"></i>Expert Articles</a></li>
            <li><a href="../page/healthrecipes.html" class="menu-content"><i class="icon -health" aria-hidden="true"></i>Healthy
                Recipes</a></li>
            <!-- <li><a href="#" class="menu-content"><i class="icon -nutrition" aria-hidden="true"></i>Wellness
                videos</a></li> -->
          </ul>
        </div>
      </li>

      <li>
        <div class="header-menu">
          <a href="../page/blog.html" class="menu">COMMUNITY<span class="material-symbols-outlined" class="arrow_icon">
          arrow_drop_down
        </span></a>
          <ul class="sub-menu" id="">
            <li><a href="../page/blog.html" class="menu-content"><i class="icon -community" aria-hidden="true"></i>Community</a>
            </li>
            <li><a href="../page/blog.html" class="menu-content"><i class="icon -blog" aria-hidden="true"></i>Blog</a>
            </li>
          </ul>
        </div>
      </li>

      <li>
        <div class="header-menu">
          <a href="#" class="menu">ABOUT<span class="material-symbols-outlined" class="arrow_icon">
          arrow_drop_down
        </span></a>
          <ul class="sub-menu" id="">
            <li><a href="../page/aboutpage.html" class="menu-content"><i class="icon -blog" aria-hidden="true"></i>ABOUT</a>
            </li>
            <li><a href="../page/aboutpage.html" class="menu-content"><i class="icon -community" aria-hidden="true"></i>CAREERS</a>
            </li>
            <li><a href="../page/tutorials.html" class="menu-content"><i class="icon -blog" aria-hidden="true"></i>TUTORIALS</a>
            </li>
            <li><a href="../page/aboutpage.html" class="menu-content"><i class="icon -blog" aria-hidden="true"></i>OUR TEAMS</a>
            </li>

          </ul>
        </div>
      </li>

      <li>
        <div class="header-menu">
          <a href="../page/store.html" class="menu">STORE</a>
        </div>
      </li>

      <li>
        <div class="header-menu">
          <a href="../page/membership.html" class="menu" id="nav_member">MEMBERSHIP</a>
        </div>
      </li>
    </ul>

  </div>

  <div id="nav_signin">
    
    <div id="signin_div">
      <ul>
      <div id="user_image"><img src="data:image/png;base64,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" alt="" /></div>
        <ul>
            <li>
                <div class="header-menu menu-login">
                    <a href="#" class="menu">
                        <div id="hi_signin">Hi! Sign in</div>
                        <div id="myfitness">MY FITNESS<span class="material-symbols-outlined" class="arrow_icon">
                                arrow_drop_down
                            </span> </div>
                    </a>
                    <ul class="login" id="join_free">
                        <p id ="status">JOIN FOR FREE!</p>
                        <p>Join for free and start building and tracking your workouts, get support from other
                            Fitness
                            Blender members and more!</p>
                        <li class = "remove"><a href="../page/signup.html"><button class="login-btn" id="login_btn_join">JOIN</button></a></li>
                        <li class = "remove"><a href="../page/login.html"><button class="login-btn" id="login_btn_sign">SIGN IN</button></a></li>
                       
                    </ul>

                </div>
            </li>
        </ul>
    </div>
  </div>

  <div id="nav_cart">
    <div>
      <span class="material-symbols-outlined" id="nav_search">
        search
      </span>
    </div>
    <div>
      <span class="material-symbols-outlined" id="nav_bag">
        shopping_bag
      </span>
    </div>
    <div id="bag_item"></div>

  </div>
</div>`;
}

export default navbar;
