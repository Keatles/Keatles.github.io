/**
 * Created by kee on 2016-06-27.
 */
(function() {
    /**
     * 定义游戏类, map代表网格地图, block代表移动方块,initPosition代表方块初始位置
     * @constructor
     */
    function Game() {
        this.map = null;
        this.block = null;
        this.initPosition = {x: 5, y: 5};
    }


    /**
     * 初始化: 生成网格地图和数字索引, 并在起始位置放置小方块, 其中x和y为横纵坐标
     */
    Game.prototype.init = function() {
        this.map = document.getElementsByTagName('tbody')[0];
        for (var i = 0; i < 11; i += 1) {
            var tr = document.createElement('tr');
            for (var j = 0; j < 11; j += 1) {
                var td = document.createElement('td');
                if (i == 0 && j > 0) {
                    td.innerHTML = j;
                } else if (i != 0 && j == 0) {
                    td.innerHTML = i;
                }
                tr.appendChild(td);
            }
            this.map.appendChild(tr);
        }
        this.block = createBlock(this.initPosition.x, this.initPosition.y);
    };

    /**
     * 游戏开始: 每隔 (1 / 60)s 刷新一次
     */
    Game.prototype.start = function() {
        var self = this;
        setInterval(function() {
            self.update();
        }, 1000 / 60);
    };

    /**
     * 重绘小方块
     */
    Game.prototype.update = function() {
        drawBlock(this.block);
    };

    /**
     * 设置指令
     * @param command
     */
    Game.prototype.setCommand = function(command) {
        switch (command.trim().toUpperCase()) {
            case 'GO':                              //探路
                this.tryPath(this.block.direction);
                break;
            case 'TUN LEF':                         //左转
                rotate(this.block, -1);
                break;
            case 'TUN RIG':                         //右转
                rotate(this.block, 1);
                break;
            case 'TUN BAC':                         //后转
                rotate(this.block, 2);
                break;
            case 'TRA LEF':
                this.tryPath(this.block.direction);
                break;
            default:
                break;
        }
    };

    /**
     * 探路函数: 当小方块位于四条边时不能前进
     * @param direction
     */
    Game.prototype.tryPath = function(direction) {
        switch (direction) {
            case 0:
                if (this.block.y > 1) this.block.y--;
                break;
            case 1:
                if (this.block.x < 10) this.block.x++;
                break;
            case 2:
                if (this.block.y < 10) this.block.y++;
                break;
            case 3:
                if (this.block.x > 1) this.block.x--;
                break;
            default:
                break;
        }
        this.update();
    };

    /**
     * 创建小方块
     * @param x 横轴索引
     * @param y 纵轴索引
     * @returns {Element}
     */
    function createBlock(x, y) {
        var cn = document.getElementsByClassName('container')[0];
        var block = document.createElement('div');
        block.className = 'block';
        block.appendChild(document.createElement('div'));
        cn.appendChild(block);
        block.x = x;
        block.y = y;
        block.offsetX = 45;                         //相对于table左上角偏移量
        block.offsetY = 46;
        block.direction = 0;                        //初始方向朝上, 0代表向上, 1代表向右, 2代表向下, 3代表向左
        return block;
    }

    function drawBlock(block) {
        block.style.cssText = 'top: ' + (block.offsetY + (block.y - 1) * 45) + 'px; left: ' + (block.offsetX + (block.x - 1) * 45) + 'px;';
    }

    function rotate(block, dir) {
        var head = block.childNodes[0];
        block.direction = (dir + block.direction + 4) % 4;  // 更新方向

        switch (block.direction) {
            case 0:
                head.style.cssText = 'top: 0; left: 0; width: 100%; height: 10px;';
                break;
            case 1:
                head.style.cssText = 'top: 0; right: 0; width: 10px; height: 100%;';
                break;
            case 2:
                head.style.cssText = 'bottom: 0; left: 0; width: 100%; height: 10px;';
                break;
            case 3:
                head.style.cssText = 'top: 0; left: 0; width: 10px; height: 100%;';
                break;
            default:
                break;
        }
    }

    var game = new Game();
    game.init();
    game.start();

    // 按钮事件监听
    var bt = document.getElementById('bt');
    bt.addEventListener('click', function() {
        var comm = document.getElementById('input').value;
        game.setCommand(comm);
    });

})();