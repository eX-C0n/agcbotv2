module.exports = {
    name: "loanhelp",
    aliases: ["lh"],
    category: "loans",
    description: "provides help for loans",
    usage: "<!loanhelp>",
    run: async (client, message, args) => {
        message.channel.send("There are a total of 5 commands relating to loans.\nLoan, return, borrow, receive, and collat.\nLoan: ``!loan @user items youre loaning to user``\nReturn: ``!return @user items you're returning to user``\nCollat: ``!collat @user details of the collateral trade(who is trading what)``\nReceive: ``!receive @user items you received back from user``\nBorrow: ``!borrow @user items youre borrowing from user``");
    }
}