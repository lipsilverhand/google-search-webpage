let currenthour;
        let date;
        let time = document.querySelector('.time');
        function t() {
            date = new Date();
            time.innerHTML = date.toLocaleTimeString();
        }
        setInterval(t, 1000);

        
        date = new Date();
        currenthour = date.getHours();
        
        document.addEventListener("DOMContentLoaded", function() {
            let heading = document.querySelector('.heading');
            if (currenthour < 12) {
                heading.innerHTML = "GOOD MORNING";
                document.querySelector('body').style.backgroundColor = "beige";
            } else if (currenthour < 18) {
                heading.innerHTML = "GOOD AFTERNOON";
                document.querySelector('body').style.backgroundColor = "orange";
            } else {
                heading.innerHTML = "GOOD EVENING";
                document.querySelector('body').style.backgroundColor = "purple";
                document.querySelector('.main').style.color = "white";
            }

            document.querySelector('.b').disabled = true;
            
            document.querySelector('form').onkeyup = () => {
                if (document.querySelector('.a').value.length > 0) {
                    document.querySelector('.b').disabled = false;
                } else {
                    document.querySelector('.b').disabled = true;
                }
            }

        })