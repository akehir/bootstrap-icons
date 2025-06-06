import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { filter, map, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  template: `
  <div class="search">
    <div class="search__query">
      <label class="search__label" for="search">Search</label>
      <input class="search__field"
        type="text"
        id="search"
        [formControl]="term"
        placeholder="Search"
        autocomplete="off">
    </div>
    <div class="search__answer">
      @for (result of results; track result) {
        <a [routerLink]="result.slice(0,1)" [fragment]="result" (click)="clear()">{{result}}</a>
      }
    </div>
  </div>
  `,
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class SearchComponent implements OnInit {
  term = new UntypedFormControl('');
  results = [];
  icons = [
    'alarm_fill',
    'alarm',
    'alt',
    'app_indicator',
    'app',
    'archive_fill',
    'archive',
    'arrow_90_deg_down',
    'arrow_90_deg_left',
    'arrow_90_deg_right',
    'arrow_90_deg_up',
    'arrow_bar_down',
    'arrow_bar_left',
    'arrow_bar_right',
    'arrow_bar_up',
    'arrow_clockwise',
    'arrow_counterclockwise',
    'arrow_down_left',
    'arrow_down_right',
    'arrow_down_short',
    'arrow_down',
    'arrow_left_right',
    'arrow_left_short',
    'arrow_left',
    'arrow_repeat',
    'arrow_return_left',
    'arrow_return_right',
    'arrow_right_short',
    'arrow_right',
    'arrow_up_down',
    'arrow_up_left',
    'arrow_up_right',
    'arrow_up_short',
    'arrow_up',
    'arrows_angle_contract',
    'arrows_angle_expand',
    'arrows_collapse',
    'arrows_expand',
    'arrows_fullscreen',
    'arrows_move',
    'aspect_ratio_fill',
    'aspect_ratio',
    'at',
    'award_fill',
    'award',
    'backspace_fill',
    'backspace_reverse_fill',
    'backspace_reverse',
    'backspace',
    'bag_fill',
    'bag',
    'bar_chart_fill',
    'bar_chart',
    'battery_charging',
    'battery_full',
    'battery_half',
    'battery',
    'bell_fill',
    'bell',
    'blockquote_left',
    'blockquote_right',
    'book_half',
    'book',
    'bookmark_check',
    'bookmark_dash',
    'bookmark_fill',
    'bookmark_plus',
    'bookmark',
    'bookmarks_fill',
    'bookmarks',
    'bootstrap_fill',
    'bootstrap_reboot',
    'bootstrap',
    'bounding_box_circles',
    'bounding_box',
    'box_arrow_down_left',
    'box_arrow_down_right',
    'box_arrow_down',
    'box_arrow_in_down_left',
    'box_arrow_in_down_right',
    'box_arrow_in_down',
    'box_arrow_in_left',
    'box_arrow_in_right',
    'box_arrow_in_up_left',
    'box_arrow_in_up_right',
    'box_arrow_in_up',
    'box_arrow_left',
    'box_arrow_right',
    'box_arrow_up_left',
    'box_arrow_up_right',
    'box_arrow_up',
    'braces',
    'briefcase_fill',
    'briefcase',
    'brightness_alt_high_fill',
    'brightness_alt_high',
    'brightness_alt_low_fill',
    'brightness_alt_low',
    'brightness_high_fill',
    'brightness_high',
    'brightness_low_fill',
    'brightness_low',
    'brush',
    'bucket_fill',
    'bucket',
    'building',
    'bullseye',
    'calendar_fill',
    'calendar',
    'camera_video_fill',
    'camera_video',
    'camera',
    'capslock_fill',
    'capslock',
    'card_checklist',
    'card_heading',
    'card_image',
    'card_list',
    'card_text',
    'caret_down_fill',
    'caret_down',
    'caret_left_fill',
    'caret_left',
    'caret_right_fill',
    'caret_right',
    'caret_up_fill',
    'caret_up',
    'chat_dots_fill',
    'chat_dots',
    'chat_fill',
    'chat_quote_fill',
    'chat_quote',
    'chat_square_dots_fill',
    'chat_square_dots',
    'chat_square_fill',
    'chat_square_quote_fill',
    'chat_square_quote',
    'chat_square',
    'chat',
    'check_all',
    'check_box',
    'check_circle',
    'check',
    'chevron_bar_contract',
    'chevron_bar_down',
    'chevron_bar_expand',
    'chevron_bar_left',
    'chevron_bar_right',
    'chevron_bar_up',
    'chevron_compact_down',
    'chevron_compact_left',
    'chevron_compact_right',
    'chevron_compact_up',
    'chevron_contract',
    'chevron_double_down',
    'chevron_double_left',
    'chevron_double_right',
    'chevron_double_up',
    'chevron_down',
    'chevron_expand',
    'chevron_left',
    'chevron_right',
    'chevron_up',
    'circle_fill',
    'circle_half',
    'circle_square',
    'circle',
    'clipboard_data',
    'clipboard',
    'clock_fill',
    'clock_history',
    'clock',
    'cloud_download',
    'cloud_fill',
    'cloud_upload',
    'cloud',
    'code_slash',
    'code',
    'collection_fill',
    'collection_play_fill',
    'collection_play',
    'collection',
    'columns_gap',
    'columns',
    'command',
    'compass',
    'cone_striped',
    'cone',
    'controller',
    'credit_card',
    'crop',
    'cursor_fill',
    'cursor_text',
    'cursor',
    'dash_circle_fill',
    'dash_circle',
    'dash_square_fill',
    'dash_square',
    'dash',
    'diamond_fill',
    'diamond_half',
    'diamond',
    'display_fill',
    'display',
    'dot',
    'download',
    'droplet_fill',
    'droplet_half',
    'droplet',
    'egg_fill',
    'egg_fried',
    'egg',
    'eject_fill',
    'eject',
    'envelope_fill',
    'envelope_open_fill',
    'envelope_open',
    'envelope',
    'exclamation_circle_fill',
    'exclamation_circle',
    'exclamation_diamond_fill',
    'exclamation_diamond',
    'exclamation_octagon_fill',
    'exclamation_octagon',
    'exclamation_square_fill',
    'exclamation_square',
    'exclamation_triangle_fill',
    'exclamation_triangle',
    'exclamation',
    'exclude',
    'eye_fill',
    'eye_slash_fill',
    'eye_slash',
    'eye',
    'file_arrow_down',
    'file_arrow_up',
    'file_break',
    'file_check',
    'file_code',
    'file_diff',
    'file_earmark_arrow_down',
    'file_earmark_arrow_up',
    'file_earmark_break',
    'file_earmark_check',
    'file_earmark_code',
    'file_earmark_diff',
    'file_earmark_minus',
    'file_earmark_plus',
    'file_earmark_ruled',
    'file_earmark_spreadsheet',
    'file_earmark_text',
    'file_earmark_zip',
    'file_earmark',
    'file_minus',
    'file_plus',
    'file_post',
    'file_richtext',
    'file_ruled',
    'file_spreadsheet',
    'file_text',
    'file_zip',
    'file',
    'files_alt',
    'files',
    'film',
    'filter_left',
    'filter_right',
    'filter',
    'flag_fill',
    'flag',
    'folder_check',
    'folder_fill',
    'folder_minus',
    'folder_plus',
    'folder_symlink_fill',
    'folder_symlink',
    'folder',
    'fonts',
    'forward_fill',
    'forward',
    'fullscreen_exit',
    'fullscreen',
    'funnel_fill',
    'funnel',
    'gear_fill',
    'gear_wide_connected',
    'gear_wide',
    'gear',
    'gem',
    'geo_alt',
    'geo',
    'gift_fill',
    'gift',
    'graph_down',
    'graph_up',
    'grid_1_x_2_fill',
    'grid_1_x_2',
    'grid_3_x_2_gap_fill',
    'grid_3_x_2_gap',
    'grid_3_x_2',
    'grid_3_x_3_gap_fill',
    'grid_3_x_3_gap',
    'grid_3_x_3',
    'grid_fill',
    'grid',
    'hammer',
    'hash',
    'heart_fill',
    'heart_half',
    'heart',
    'house_door_fill',
    'house_door',
    'house_fill',
    'house',
    'hr',
    'image_alt',
    'image_fill',
    'image',
    'images',
    'inbox_fill',
    'inbox',
    'inboxes_fill',
    'inboxes',
    'info_circle_fill',
    'info_circle',
    'info_square_fill',
    'info_square',
    'info',
    'intersect',
    'justify_left',
    'justify_right',
    'justify',
    'kanban_fill',
    'kanban',
    'laptop',
    'layers_fill',
    'layers_half',
    'layers',
    'layout_sidebar_inset_reverse',
    'layout_sidebar_inset',
    'layout_sidebar_reverse',
    'layout_sidebar',
    'layout_split',
    'layout_text_sidebar_reverse',
    'layout_text_sidebar',
    'layout_text_window_reverse',
    'layout_text_window',
    'layout_three_columns',
    'layout_wtf',
    'life_preserver',
    'lightning_fill',
    'lightning',
    'link_45_deg',
    'link',
    'list_check',
    'list_nested',
    'list_ol',
    'list_task',
    'list_ul',
    'list',
    'lock_fill',
    'lock',
    'map',
    'mic_fill',
    'mic_mute_fill',
    'mic_mute',
    'mic',
    'moon',
    'music_note_beamed',
    'music_note_list',
    'music_note',
    'music_player_fill',
    'music_player',
    'newspaper',
    'octagon_fill',
    'octagon_half',
    'octagon',
    'option',
    'outlet',
    'paperclip',
    'pause_fill',
    'pause',
    'pen',
    'pencil_square',
    'pencil',
    'pentagon_fill',
    'pentagon_half',
    'pentagon',
    'people_circle',
    'people_fill',
    'people',
    'person_bounding_box',
    'person_check_fill',
    'person_check',
    'person_dash_fill',
    'person_dash',
    'person_fill',
    'person_lines_fill',
    'person_plus_fill',
    'person_plus',
    'person_square',
    'person',
    'phone_landscape',
    'phone',
    'pie_chart_fill',
    'pie_chart',
    'pip_fill',
    'pip',
    'play_fill',
    'play',
    'plug',
    'plus_circle_fill',
    'plus_circle',
    'plus_square_fill',
    'plus_square',
    'plus',
    'power',
    'puzzle_fill',
    'puzzle',
    'question_circle_fill',
    'question_circle',
    'question_diamond_fill',
    'question_diamond',
    'question_octagon_fill',
    'question_octagon',
    'question_square_fill',
    'question_square',
    'question',
    'reply_all_fill',
    'reply_all',
    'reply_fill',
    'reply',
    'screwdriver',
    'search',
    'server',
    'shield_fill',
    'shield_lock_fill',
    'shield_lock',
    'shield_shaded',
    'shield',
    'shift_fill',
    'shift',
    'shuffle',
    'skip_backward_fill',
    'skip_backward',
    'skip_end_fill',
    'skip_end',
    'skip_forward_fill',
    'skip_forward',
    'skip_start_fill',
    'skip_start',
    'slash_circle_fill',
    'slash_circle',
    'slash_square_fill',
    'slash_square',
    'slash',
    'sliders',
    'soundwave',
    'speaker',
    'square_fill',
    'square_half',
    'square',
    'star_fill',
    'star_half',
    'star',
    'stop_fill',
    'stop',
    'stopwatch_fill',
    'stopwatch',
    'subtract',
    'sun',
    'table',
    'tablet_landscape',
    'tablet',
    'tag_fill',
    'tag',
    'terminal_fill',
    'terminal',
    'text_center',
    'text_indent_left',
    'text_indent_right',
    'text_left',
    'text_right',
    'textarea_t',
    'textarea',
    'three_dots_vertical',
    'three_dots',
    'toggle_off',
    'toggle_on',
    'toggles',
    'tools',
    'trash_fill',
    'trash',
    'trash_2_fill',
    'trash_2',
    'triangle_fill',
    'triangle_half',
    'triangle',
    'trophy',
    'tv_fill',
    'tv',
    'type_bold',
    'type_h_1',
    'type_h_2',
    'type_h_3',
    'type_italic',
    'type_strikethrough',
    'type_underline',
    'type',
    'union',
    'unlock_fill',
    'unlock',
    'upload',
    'view_list',
    'view_stacked',
    'volume_down_fill',
    'volume_down',
    'volume_mute_fill',
    'volume_mute',
    'volume_up_fill',
    'volume_up',
    'vr',
    'wallet',
    'watch',
    'wifi',
    'window',
    'wrench',
    'x_circle_fill',
    'x_circle',
    'x_diamond_fill',
    'x_diamond',
    'x_octagon_fill',
    'x_octagon',
    'x_square_fill',
    'x_square',
    'x',
];

  ngOnInit(): void {
    this.term.valueChanges.pipe(
      throttleTime(64),
      filter((term) => term && term.length > 0),
      map((term) => this.icons.filter((element) => element.indexOf(term) !== -1)),
    ).subscribe((results) => {
      this.results = results;
      }
    );
  }

  clear() {
    this.results.length = 0;
  }
}
