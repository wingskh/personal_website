export const openUrl = (urlTyle: string) => {
    let url;
    switch (urlTyle) {
      case "github":
        url = "https://github.com/wingskh";
        break;
      case "linkedin":
        url = "https://www.linkedin.com/in/ka-ho-sun-8b8897179/";
        break;
      case "leetcode":
        url = "https://leetcode.com/wingskh/";
        break;
      default:
        url = urlTyle;
        break;
    }
    window.open(url, "_blank")!.focus();
  };