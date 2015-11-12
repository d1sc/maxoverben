var active = true;

try {
    chrome.storage.sync.get({
        activate: true
    }, function (items) {
        active = items.activate;
        if (active) {
            main();
        }
        track(items.activate ? "true" : "false");
    });
} catch (e) {
    if (active) {
        main();
    }
    track("undefined");
}

function track(active) {
    //UA-9413471-3

    ga('create', 'UA-9413471-3', 'auto');
    ga('set', 'dimension1', active);
    ga('send', 'pageview');

    // //Analytics
    // var _gaq = window._gaq || [];
    // _gaq.push(['_setAccount', 'UA-9413471-3']);
    // _gaq.push(['_gat._forceSSL']);
    // _gaq.push(["_setCustomVar", 1, "Active", active, 3]);
    // _gaq.push(['_trackPageview']);
}

//Content script, image replacer
function main() {
    
    //rNet 
    (function ($) {
        // https://cdn.rawgit.com/AaronLayton/rNet/master/images/
        var self = {
            rNetImgs: [
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/1.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/10.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/12-years.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/181642_1863007259994_3526037_n.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/185616_10150396267885237_6828450_n.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/2.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/3.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/4.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/5.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/51558185.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/6.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/7.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/8.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/Aaron.png',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/adrian at the beach.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/adrian wars.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/adrian.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/Adrian0898549.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/adrian2.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/AdrianHead2.png',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/adriankrjkvgj.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/adrianv111.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/AndyBrentDance.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/andy_brent.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/bane.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/barry.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/ben-hippy.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/berty.png',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/Cache all the things.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/coffee-gods.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/damn-it-man.png',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/dan.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/dan2.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/dan3.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/dan4.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/dan5.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/danagain.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/danfalls.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/dannnn.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/danped.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/dating.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/designers-assemble.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/eventure-independant-traders.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/eventure-matt-404.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/EventureMatt.png',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/fkjekjfe.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/gaywatch.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/getwellsoon.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/glee.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/group.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/gurnhillspongepants.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/ha.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/hodor.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/homer-steve.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/i-aint-getting-on-no-plane.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/Image1.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/IMG_5116.JPG',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/layjuff.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/lol.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/maintenance.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/mark-and-andy.png',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/Marky Golf.png',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/markyB.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/mattupsidedown.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/mattV2.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/matt_drake.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/mermaid.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/miltonator.png',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/output.txt',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/parcelshop.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/perfect.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/porkins.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/rambling.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/Remarkable Cinema Rush.png',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/remarkasamable.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/sam+car.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/sam-1.png',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/sam.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/sammy.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/samramid.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/sams-weekend.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/samV22.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/Samwise.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/SCP.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/STAHP.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/steve1.png',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/superman_pic2.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/TeamTwat.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/the gurnhills.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/TheRock.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/Tim Tim Tim.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/Twinnuies.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/Uncle Albert-Matt.png',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/Untitled2.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/Untitled55555.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/Untitledgfrg5g5.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/warwick.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/yearbook.jpg',
                'https://cdn.rawgit.com/AaronLayton/rNet/master/images/yourstimes.jpg'
            ],

            //Handles all images on page with an interval of time
            handleImages: function (lstImgs, time) {
                $.each($('img'), function (i, item) {
                    //Skip if image is already replaced
                    if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                        var h = $(item).height();
                        var w = $(item).width();

                        //If image loaded
                        if (h > 0 && w > 0) {

                            self.handleImg(item, lstImgs);
                        }
                        else {
                            //Replace when loaded
                            $(item).load(function () {
                                //Prevent 'infinite' loop
                                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                    self.handleImg(item, lstImgs);
                                }
                            });
                        }
                    }
                });

                //Keep replacing
                if (time > 0) {
                    setTimeout(function () { self.handleImages(lstImgs, time); }, time);
                }
            },
            //Replace one image
            handleImg: function (item, lstImgs) {
                $(item).error(function () {
                    //Handle broken imgs
                    self.handleBrokenImg(item, lstImgs);
                });

                self.setRandomImg(item, lstImgs);
            },
            //Set a random image from lstImgs to item 
            setRandomImg: function (item, lstImgs) {
                var h = $(item).height();
                var w = $(item).width();
                $(item).css('width', w + 'px').css('height', h + 'px');
                $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
            },
            //Removed broken image from lstImgs, run handleImg on item
            handleBrokenImg: function (item, lstImgs) {

                var brokenImg = $(item).attr('src');
                var index = lstImgs.indexOf(brokenImg);
                if (index > -1) {
                    lstImgs.splice(index, 1);
                }
                self.setRandomImg(item, lstImgs);
            },
        };

        //Run on jQuery ready
        $(function () {

            self.handleImages(self.rNetImgs, 3000);

        });

        //Set global variable
        $.rNet = self;


    })(jQuery);
    //end rNet
}