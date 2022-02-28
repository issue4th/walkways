scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level2`))
    start_level()
})
function start_level () {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile5`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    game.over(false, effects.slash)
})
let mySprite: Sprite = null
scene.setBackgroundColor(11)
tiles.loadMap(tiles.createMap(tilemap`level1`))
mySprite = sprites.create(img`
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
controller.moveSprite(mySprite, 50, 50)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile5`)
