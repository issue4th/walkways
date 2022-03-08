namespace SpriteKind {
    export const chest = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    mySprite2 = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        e e e e e e f f f f e e e e e e 
        e e e e e e f f f f e e e e e e 
        e e e e e e f f f f e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e 5 e e e 5 5 e e e e e e 
        e 5 e e 5 5 5 5 5 5 5 5 e e 5 e 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 f f f f f f 5 5 f f 5 5 5 f f 
        5 e e e e e e 5 5 e e e 5 e e e 
        e e e e e e e e 5 e e e 5 e e e 
        5 e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e 5 e e e e e e e 
        e e e e e e e e e e e e e e e e 
        `, SpriteKind.chest)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile13`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level5`))
    start_level()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level2`))
    start_level()
})
function start_level () {
    tiles.placeOnRandomTile(player_1, assets.tile`myTile5`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    tiles.placeOnRandomTile(player_1, assets.tile`myTile12`)
})
let mySprite2: Sprite = null
let player_1: Sprite = null
scene.setBackgroundColor(11)
tiles.loadMap(tiles.createMap(tilemap`level1`))
player_1 = sprites.create(img`
    . . . . . . . . . 
    . . . . . . . . . 
    . . . . . f f f . 
    . . . . f 1 1 1 f 
    . . . . f 1 1 1 f 
    . . . . f 1 1 1 f 
    . . . . . f f f . 
    . . . . . . f . . 
    . . . . f f f f f 
    . . . . . . f . . 
    . . . . . . f . . 
    . . . . . . f . . 
    . . . . . f f f . 
    . . . . f f . f f 
    . . . . f . . . f 
    . . . . f . . . f 
    `, SpriteKind.Player)
controller.moveSprite(player_1, 50, 50)
scene.cameraFollowSprite(player_1)
tiles.placeOnRandomTile(player_1, assets.tile`myTile5`)
