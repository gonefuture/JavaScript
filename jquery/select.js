$(function() {
    //加载第一个栏目
    LoadFirst();

    $("#second").append("<option option value= -1 >班级</option>");

    //加载第二个栏目
    $("#first").on("change",() => {
        $("#second").children("option").detach();
        let firstIndex = $("#first>option:selected").index();//取得选中的想的数组下标0
        if(firstIndex >0) {
            LoadSecond(firstIndex);
        }
        });
   

    //使用async/await语句的fetch 
    async function LoadFirst() {
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let response = await fetch('http://gonefuture.xin/amenity/college');
            let data = await response.json();
            
            $("#first").append("<option value= -1 >请选择学院</option>");
            for (let i = 0; i < data.length; i++) {
                $("#first").append("<option value="+data[i].id+" >"+data[i].collegename+"</option>");
            } 
        } catch(error) {
                console.error(error);
        }
    }
    




    //使用then异步链的fetch   
    function LoadSecond(firstIndex) {
        fetch('http://gonefuture.xin/amenity/studentClass?pid='+firstIndex)
        .then(res => res.json())
        .then(data =>{
            for (let i = 0; i < data.length; i++) {
                $("#second").append("<option value="+data[i].id+" >"+data[i].classname+"</option>"); 
            } 
        }).catch(err => console.error(err));
      }

});
