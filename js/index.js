function generateQuote(){
    var author =[ "Marcus Tullius Cicero","Frank Zappa","Oscar Wilde","Mae West","Elbert Hubbard","Frank Sinatra","Steve Martin","Mark Twain","George Eliot","Ralph Waldo Emerson","Mother Teresa","Albert Einstein","Jorge Luis Borges"]
    var quote =["A room without books is like a body without a soul.","So many books, so little time.","Be yourself; everyone else is already taken.","You only live once, but if you do it right, once is enough.","Do not take life too seriously. You will not get out alive.","The best revenge is massive success.","A day without sunshine is like, you know, night.","Never put off till tomorrow what may be done day after tomorrow just as well.","It is never too late to be what you might have been.","For every minute you are angry you lose sixty seconds of happiness.","If you judge people, you have no time to love them.","If you can't explain it to a six year old, you don't understand it yourself.","I have always imagined that Paradise will be a kind of library."];
    var num =Math.floor(Math.random()* author.length);
document.getElementById("quote").innerHTML=`"${quote[num]}"`;
document.getElementById("auther").innerHTML=`--${author[num]}`;
}


