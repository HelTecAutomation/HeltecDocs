#!/bin/bash

#echo 'test' > ./_build/html/h.html 

language="zh_CN en"

ls_command="ls -I _ext -I main ../"

proj_type=$(${ls_command})


build () {
  python -m sphinx -T -E -b html -d _build/$1/$2/$3/doctrees -D language=$1 $4 _build/html/$1/$2/$3
}


for l in $language
do
  for t in $proj_type
  do
    for p in $(${ls_command}/${t})
    do
      build $l $t $p "../${t}/${p}/source/"
    done
  done
done


