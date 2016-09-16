
$(document).ready(function(){




        
function ToggleBlogTOC(){
	
	if ($("#posts").is(":visible")== true){
		$("#posts").hide();	
		$("#blog-collapse").html("Blog Posts");
      
	}else{
		$("#posts").show();	
		$("#blog-collapse").html("Blog Posts");
	
	}

}

		
		
/**compile templates**/    

      var source= $("#blog-template").html();
      var blog_template= Handlebars.compile(source); 
    
      source= $("#projects-template").html();
      var projects_template=Handlebars.compile(source);
    
      source=$("#resume-template").html();
      var resume_template=Handlebars.compile(source);
    
      source=$("#home-template").html();
      var home_template=Handlebars.compile(source);
      
       source=$("#sidebar-template").html();
      var sidebar_template=Handlebars.compile(source);

   $("#blogbtn").click(function (){
		$("#content").show();
		$("#content-resume").hide();
        var html= blog_template(blog_data);
        $("#content").html(html);
		
		html= sidebar_template(blog_data);
		$("#sidebar").html(html);
        $("#sidebar").show();
    
        $(".navbar-nav .active").removeClass("active");
        $("#blogbtn").addClass("active");
		var blog_width = $(".blog-template").width();
		$("#content").width(blog_width);
		
		
		
			$("#blog-collapse").click(function(){
				
				ToggleBlogTOC();
	
			});
    
		
    
    });   
      
    
    $(".projectsbtn").click(function(){
				$("#content").show();
         $("#content-resume").hide();
        var html= projects_template(projects);
        $("#content").html(html);    
        
        $(".navbar-nav .active").removeClass("active");
        $("#projectsbtn").addClass("active");
		$(".sidebar-right").hide();
        
        
        
    });
    
    $("#home-page").click(function(){
		$("#content").show();
         var html= home_template();
        $("#content").html(html);
        $("#sidebar").hide();
		  $("#content-resume").hide();
        
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
		$("#content-resume").show();
        var html= resume_template();
        $("#content-resume").html(html);    
         $("#sidebar").hide();
		 $("#content").hide();
     
        
        $(".navbar-nav .active").removeClass("active");
        $("#cvbtn").addClass("active");
        
        
    });
	
	

    
    
     $("#home-page").click();
});