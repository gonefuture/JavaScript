$(document).ready(function(e){
    //加载第一个栏目
    //LoadFirst();
    //加载第二个栏目
    //LoadSecond();
    //fetchData2();

    myfetch();



    //第一栏目ajax请求
    function LoadFirst() {      
        $.ajax({
            url:"http://gonefuture.xin/amenity/college",
            xhrFields: {withCredentials: true},
            dataType: "json",
            success: function(data) {
                alert("aaa");
                var data = eval('('+data+')');
                alert(data);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
            } ,  
        });
    }


    function fetchData() {
             fetch("http://gonefuture.xin/amenity/college",
             {  method: "POST",
                mode: "no-cors",
                // headers: {
                //     "Content-Type": "application/json"
                // }
             }).then(function(res){
               // let firstjson = res.json();
                console.log(JSON.stringify(res));
                alert(res);
             }).catch(function(e){
                console.log(e);
             })          
    }

      async function fetchData2() {
        try {
          // 注意这里的await语句，其所在的函数必须有async关键字声明
          let response = await fetch("http://gonefuture.xin/fishskills/news?method=QueryNews&pc=1&ps=10");
          let responseJson = await response.json();
           console.log(response);
          console.log(responseJson);
          alert(responseJson);

        } catch(error) {
          console.error(error);
        }
      }

      function myfetch() {
      fetch("http://gonefuture.xin/amenity/college")
      .then(res => {
          console.log(res)
        if (res.ok) {
          return res.json()
        }
      }).then(data => {
        console.log(data);
      }).catch(function(e) {
        console.log("Oops, error");
      });
      }
});