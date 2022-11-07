@echo off
set DIR=%1
IF "%DIR%" == "" GOTO Bye
code -g %DIR%.
echo lets code, byeeee

:Bye
echo byee

