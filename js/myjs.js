
$(document).ready(function(){
        

/**compile templates**/    

      var source= $("#blog-template").html();
      var blog_template= Handlebars.compile(source); 
    
      source= $("#projects-template").html();
      var projects_template=Handlebars.compile(source);
    
      source=$("#resume-template").html();
      var resume_template=Handlebars.compile(source);
    
      source=$("#home-template").html();
      var home_template=Handlebars.compile(source);
      
      

   $("#blogbtn").click(function (){
       
        var html= blog_template(blog_data);
        $("#content").html(html);
        
    
        $(".navbar-nav .active").removeClass("active");
        $("#blogbtn").addClass("active");
    
    });   
      
    
    $(".projectsbtn").click(function(){
        
        
        var html= projects_template(projects);
        $("#content").html(html);    
        
        $(".navbar-nav .active").removeClass("active");
        $("#projectsbtn").addClass("active");
        
        
        
    });
    
    $("#home-page").click(function(){
         var html= home_template();
        $("#content").html(html);
      
        
        $(".navbar-nav .active").removeClass("active");
        $("#home-page").addClass("active");
        
             $(".projectsbtn").click(function(){
        
        
                 var html= projects_template(projects);
                $("#content").html(html);    
        
                 $(".navbar-nav .active").removeClass("active");
                $("#projectsbtn").addClass("active");
        
        
        
    });
        
        
    });
    

    $("#cvbtn").click(function(){
        var html= resume_template();
        $("#content").html(html);    
     
     
        
        $(".navbar-nav .active").removeClass("active");
        $("#cvbtn").addClass("active");
        
        
    });
    
   
    
    
     $("#home-page").click();
});