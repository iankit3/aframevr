<a-entity class="link"
            geometry="primitive: plane; height: 1; width: 1"
            material="shader: flat; src: ${thumb}"
            event-set__1="_event: mousedown; scale: 1 1 1"
            event-set__2="_event: mouseup; scale: 1.2 1.2 1"
            event-set__3="_event: mouseenter; scale: 1.2 1.2 1"
            event-set__4="_event: mouseleave; scale: 1 1 1"
            set-image="on: click; target: #image-360; src: ${src}"
            sound="on: click; src: #click-sound">
</a-entity>