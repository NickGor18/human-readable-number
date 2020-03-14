module.exports = function toReadable (number) {
  const firstR = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  const secondR = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
  const thirdR = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let numberstr = number.toString();
  let len = numberstr.length;
  if (len==1) { return firstR[number];}
  else if (len>1){
    let arr = numberstr.split('');
    let result = '';
    for (let i=0; i<len; i++){
      if ((len-i)==3){result += firstR[Number(arr[i])]+' hundred ';}
      else if ((len-i)==2) { if ((arr[i]=='1') &&(arr[i]!='0')) {result += secondR[Number(arr[i+1])] +' ';}
                            else if ((arr[i]!='0') &&(arr[i+1]!='0')){result += thirdR[Number(arr[i])-2] + ' '+ firstR[Number(arr[i+1])];}
                            else if ((arr[i]=='0') &&(arr[i+1]!='0')){result += firstR[Number(arr[i+1])];}
                            else if ((arr[i]!='0') &&(arr[i+1]=='0')){result += thirdR[Number(arr[i])-2];}
      }
    }
    return result.trim();
  }
}
