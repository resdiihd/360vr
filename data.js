var APP_DATA = {
  "scenes": [
    {
      "id": "0-ca-chnh",
      "name": "cửa chính",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4333212056084728
      },
      "linkHotspots": [
        {
          "yaw": 1.6211613857855998,
          "pitch": 0.178421812902128,
          "rotation": 6.283185307179586,
          "target": "1-trung-tm"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-trung-tm",
      "name": "trung tâm",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6635639729406577,
          "pitch": 0.16112431627485435,
          "rotation": 0,
          "target": "0-ca-chnh"
        },
        {
          "yaw": 2.967931268630686,
          "pitch": 0.2789070003913885,
          "rotation": 0,
          "target": "2-phng-hp"
        },
        {
          "yaw": 0.08467778510321011,
          "pitch": 0.10928005307503419,
          "rotation": 0,
          "target": "3-boss"
        },
        {
          "yaw": 1.6842777444506227,
          "pitch": 0.14729011435398576,
          "rotation": 6.283185307179586,
          "target": "4-relax"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-phng-hp",
      "name": "phòng họp",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0795219408848133,
          "pitch": 0.20041407970600567,
          "rotation": 0,
          "target": "1-trung-tm"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-boss",
      "name": "boss",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.09306851820799622,
          "pitch": 0.12971892600174328,
          "rotation": 0,
          "target": "1-trung-tm"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-relax",
      "name": "relax",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.217852580041267,
          "pitch": 0.23756604787746838,
          "rotation": 0,
          "target": "1-trung-tm"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "360vr",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
