
#include <stdio.h>
#include <string.h>
int string_length(char * s);
char * rotatestring(char * str);
int main() {
  char str1[] = "ABCD";
  char str2[] = "DABC1";
  if (isrotated(str1, str2)) printf("rotated string");
  else printf("not a rotated string");
  return 0;
}
int isrotated(char * str1, char * str2) {
  int l = string_length(str1);
  int i = 0;
  for (int i = 0; i < l; i++) {
    if (strcmp(str2, rotatestring(str1)) == 0) return 1;
  }
}
char * rotatestring(char * str) {
  char temp = str[0];
  int j = 0;
  while (j < string_length(str) - 1) {
    str[j] = str[j + 1];
    j++;
  }
  str[j] = temp;
  return str;
}
int string_length(char * s) {
  int c = 0;
  while ( * (s + c)) c++;
  return c;
}