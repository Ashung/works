<script>
    import { onMount } from 'svelte';

    onMount(() => {

        const sections = document.querySelectorAll('section');
        const sectionsThumbs = document.createElement('div');
        sectionsThumbs.className = 'section-thumbs';
        sections.forEach((target, i) => {
            const heading = target.querySelector('.works-title');
            const sectionsThumb = document.createElement('div');
            sectionsThumb.setAttribute('title', heading.textContent);
            sectionsThumbs.appendChild(sectionsThumb);
            if (i === 0) {
                sectionsThumb.classList.add('active');
            }
            sectionsThumb.addEventListener('click', event => {
                window.scrollTo({
                    top: target.offsetTop,
                    left: 0,
                    behavior: 'smooth'
                });
            });
        });

        function update() {
            let current = Array.from(sections).reverse().findIndex(node => {
                return node.getBoundingClientRect().top < innerHeight;
            });
            current = sections.length - current - 1;
            sectionsThumbs.querySelectorAll('div').forEach((thumb, i) => {
                thumb.classList.remove('active');
                if (current === i) {
                    thumb.classList.add('active');
                }
            });
        }

        document.body.appendChild(sectionsThumbs);

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', update);
            window.addEventListener('resize', update);
        }

        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
            if (sectionsThumbs) {
                document.body.removeChild(sectionsThumbs);
            }
        }
    });

</script>
