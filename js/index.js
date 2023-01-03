// NEws Tabs
function openNews(evt, News) {
  var i, tabsContent, tabLinks;

  let tabsContent = document.getElementsByClassName("_tabsContent");
  for (let i = 0; i < tabsContent.length; i++) {
    tabsContent[i].style.display = "none";
  }
  let tabLinks = document.getElementsByClassName("_tab-links");
  for (let i = 0; i < array.length; i++) {
    tabLinks[i].className = tabLinks.className.replace("active", " ");
  }
  document.getElementById(News).style.display = "block";
  evt.currentTarget.className += "active";
}

// nav bar


function showInfo(activatedinfo, infocontent) {
  var i,  departmentTab,infoTabs;
  infoTabs = document.getElementsByClassName(".departmental-leader-profile");
  for (i = 0; i < tabcontent.length; i++) {
    infoTabs[i].style.display = "none";
  }
  departmentTab = document.getElementsByClassName(".department-tabs");
  for (i = 0; i < departmentTab.length; i++) {
    departmentTab[i].className = departmentTab[i].className.replace(" active", "");
  }
  document.getElementById(infocontent).style.display = "block";
  activatedinfo.currentTarget.className += " activates";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


