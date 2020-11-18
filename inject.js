
function text(sel) {
  let e = document.querySelector(sel)
  if (!e) {
    console.log("could not find element " + sel)
    return ""
  }
  return e.textContent.trim()
}

let months = {
  "Jan": "01",
  "Feb": "02",
  "Mar": "03",
  "Apr": "04",
  "May": "05",
  "Jun": "06",
  "Jul": "07",
  "Aug": "08",
  "Sep": "09",
  "Oct": "10",
  "Nov": "11",
  "Dec": "12",
  "": "blah"
}

let day = text(".date-box  .part-left")
let month = months[text(".date-box  .part-right :nth-child(1)")]
let year = text(".date-box  .part-right :nth-child(2)")
let venue = text(".tour-entry .content a :nth-child(1)")
let city = text(".tour-entry .content a :nth-child(2)")


let list = ["%a | %T | %n | %t", ""]
let tracks = document.querySelectorAll(".track-title")
tracks.forEach(function(e, num) {
  let title = e.innerText.trim()
  list.push(`King Crimson | ${year}.${month}.${day} ${venue} - ${city} | ${num+1} | ${title}`)
})

let pre = document.createElement("pre")
pre.textContent = list.join("\n")
document.querySelector(".buy-links").prepend(pre)


